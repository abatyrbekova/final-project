import express from "express";
import Order from "../models/order.js";
import Room from "../models/room.js";

const router = express.Router();

// router.use("*", (req, res, next) => {
//   console.log(1232312313);
//   next();
// });

//GET::list of all orders with ref id of the booked room
//http://localhost:3001/api/orders/
router.get("/", async (req, res) => {
  // const orders = await Order.find().populate("room");
  const orders = await Order.find();
  return res.status(200).json(orders);
});

// get all (orders with rooms details)
//http://localhost:3001/api/orders/rooms

router.get("/rooms", async (req, res) => {
  const rooms = await Order.find().populate("bookedRoomId");
  return res.status(200).json(rooms);
});

//GET::list of all orders by room id
//http://localhost:3001/api/orders/byroom/633d47d1628fa92dfc021122 (! example room id)
router.get("/byroom/:roomid", async (req, res) => {
  const orders = await Order.find({ bookedRoomId: req.params.roomid });
  // const orders = await Order.find({ bookedRoomId: req.params.roomid }).populate("bookedRoomId");
  return res.status(200).json(orders);
});

//POST:: create new order

router.post("/create", async (req, res) => {
  try {
    const createdOrder = await Order.create({
      dateCreated: req.body.dateCreated,
      bookedRoomId: req.body.roomId, //we post the room ID, this is a reference to the room document
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });

    return res.status(200).json({ message: "Order was created", createdOrder });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// export const getHotels = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
//   try {
//     const hotels = await Hotel.find({
//       ...others,
//       cheapestPrice: { $gt: min | 1, $lt: max || 999 },
//     }).limit(req.query.limit);
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
// };

router.get(
  "/find",

  async (req, res, next) => {
    const { startDate, endDate, adults, children } = req.query;
    console.log(startDate);
    try {
      const allOrders = await Order.find({
        $or: [
          {
            $and: [
              { startDate: { $lte: startDate } },
              { endDate: { $gte: startDate } },
            ],
          },
          {
            $and: [
              { startDate: { $lte: endDate } },
              { endDate: { $gte: endDate } },
            ],
          },
        ],
      }).select("bookedRoomId");

      // here we get the id of all the booked rooms
      const bookedRooms = allOrders.map((r) => r.bookedRoomId);
      console.log(bookedRooms);
      // filter  to get all unbooked rooms based on the number of adults and children
      const rooms = await Room.find({
        _id: { $nin: bookedRooms },
        adults: { $gte: adults },
        children: { $gte: children },
      });
      // return res.status(200).json({ rooms, allOrders });
      //return res.status(200).json(allOrders);
      return res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
