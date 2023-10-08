function Planet({size, imageUrl}) {
  return (
    <div className={`h-${size} w-${size} bg-transparent relative z-0`}>
      <div className={`circle h-full w-full animate-moving absolute z-1 rounded-full bg-repeat-x bg-cover bg-[right_0rem_top_0rem]  bg-[url('${imageUrl}')]`}></div>
      <div className={`h-${size} w-${size} bg-transparent shadow-plt rounded-full absolute z-2`}/>
    </div>
  )
}

export default Planet;