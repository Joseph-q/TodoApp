interface Props{
  title:string
}

export default function BadgeTask({title}:Props) {
  return (
    <div className="flex flex-col  shadow-md border-b-1 border-gray-500">
      <h4 className="text-base font-bold">{title}</h4>
      <p className="text-sm text-gray-400 font-thin">Completada: <span> 24 Febrero</span></p>
    </div>
  );
}
