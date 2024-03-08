export default function Input(richText, ...props) {
    const output = "";
    if(!richText)
    {
      output = <input {...props} />;
    }
    else
    {
      output = <textarea {...props} />;
    }
    return output;
}
//  {/* {/* if(richText){
//   //   return <input {...props} />
//   // } else{
//   //   return <textarea {...props} />
//   // } */}
// {/* //   return <>{richText ? <textarea {...props} /> : <input {...props} />}
// //   </>;
// //     return(
// //       <>
// //           {richText && <textarea {...props} />}
// //           {!richText && <input {...props} />}
// //       </>
// //     ); */}
