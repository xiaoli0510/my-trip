export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <div>这是room</div>
      <div>hotelId:{id[1]}</div>
      <div>romId:{id[0]}</div>
    </div>
  );
}
