import { NextResponse } from "next/server";

export const GET = async function (req) {
  const url = req.nextUrl.searchParams; // la e puw recupere url u f ak fetch lan... url lam ap konsa http://localhost:3000/api/inventory?a=get&q=purchases
  const action = url.get("a"); // la puw pran donne get lan a = get
  const query = url.get("q"); // la puw pran donne get lan q = purchases lan i ka sales etc...

  const inventory = [
    { id: 1, name: "Product A", quantity: 100 },
    { id: 2, name: "Product B", quantity: 200 },
  ];

  const purchases = [
    { id: 1, item: "Product A", quantity: 10, price: 100 },
    { id: 2, item: "Product B", quantity: 5, price: 200 },
  ];

  const sales = [
    { id: 1, item: "Product A", quantity: 2, price: 120 },
    { id: 2, item: "Product B", quantity: 1, price: 220 },
  ];

  const payments = [
    { id: 1, date: "2024-01-01", amount: 100 },
    { id: 2, date: "2024-01-02", amount: 200 },
  ];

  const receipts = [
    { id: 1, date: "2024-01-01", amount: 120 },
    { id: 2, date: "2024-01-02", amount: 220 },
  ];

  // la puw kite sel method get pas nn serveur an sil post lap bay error 405
  if (action !== "get") {
    return NextResponse.json(
      {
        message: "Method not allowed",
      },
      { status: 405 }
    );
  }

  // la e yon condition ak swicth pul konn ki donnee pul tunnen an response ak q=.... an
  switch (query) {
    case "inventory":
      return NextResponse.json({ inventory }, { status: 200 });
      break;
    case "sales":
      return NextResponse.json({ sales }, { status: 200 });
      break;
    case "payments":
      return NextResponse.json({ payments }, { status: 200 });
      break;
    case "receipts":
      return NextResponse.json({ receipts }, { status: 200 });
      break;
    case "purchases":
      return NextResponse.json({ purchases }, { status: 200 });
      break;
    default:
      return NextResponse.json({ message: "Not Fuond" }, { status: 404 });
      break;
  }
};
