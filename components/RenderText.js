import React from "react"
import { get } from "lodash";
// import ReactQuill, { Quill } from "react-quill";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RenderText = (({data, style, fontSize, fontFamily}) => {
    console.log("data",data, style)
// const SizeStyle = Quill.import("attributors/style/size");
//     SizeStyle.whitelist =  fontSize.map((item) => `${get(item, "font_size")}px`);
//     Quill.register(SizeStyle, true); 
    
// const Font = Quill.import("attributors/style/font");
// Font.whitelist = fontFamily.map((item) => get(item, "font_family"));
// Quill.register(Font, true);
  return (
    <>
      {get(data, "section_text_content") === "<p><br></p>" ? <></> : (
        <div style={style} className="overflow-hidden">
          <div className='react-quill-text'>
            <ReactQuill
              readOnly
              theme="snow"
              value={get(data, "section_text_content", "")}
              modules={{ toolbar: false }}
            />
          </div>
        </div> 
      )}
    </>
  );
})

export default RenderText;