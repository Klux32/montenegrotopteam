import React, {useEffect, useState} from "react";
import { faq } from "../data/data";

const FaqAuto = () => {
    const [showItem, setShowItem] = useState(1);
    
    let faqData = faq;
    let show;
    console.log(faq)
    
    const showItemFunc = () =>{
        if(showItem === faqData.length){
            setShowItem(1);
        }else{

            setShowItem(showItem + 1)
        }

        faqData.map((item,key)=>{
            key + 1 === showItem 
            ? 
            (item.show = true, item.collapse = true)
            : 
            (item.show = false, item.collapse = false)
        })
        console.log(showItem);
    }
    
    
    useEffect(()=>{
        clearTimeout(show)
    show = setTimeout(() => {
        showItemFunc()
        }, 10500);
    },[showItemFunc])




  return (
    <div className="accordion" id="accordionExample">
      {faqData.map((item, key) => (
        <div key={key} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${item.collapse ? null : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseOne${key}`}
              aria-expanded={`${item.show}`}
              aria-controls="collapseOne"
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapseOne${key}`}
            className={`accordion-collapse collapse ${item.show ? 'show' : null}`}
            style={{transitionProperty:"all 5s ease"}}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{transitionProperty:"all 5s ease"}}>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAuto;
