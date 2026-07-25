export async function POST() {
  return Response.json({
    isSuccess: true,
    body: {
      promotion: 11,
      coupon: 22,
      integral: 33,
    },
  });
}
