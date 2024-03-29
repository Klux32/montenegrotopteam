export const navShrink = () => {
    const bodyHeight = document.documentElement.scrollHeight;
    const viewHeight = document.documentElement.clientHeight;
    const bodyTop = document.documentElement.scrollTop;
    const bottomLine = bodyTop + viewHeight;
    const progressWidth = (bottomLine / bodyHeight) * 100

    const sections = document.getElementsByClassName("section")
    const links = document.getElementsByClassName("nav-link")
    let current = "";
    const pageYOffset = window.pageYOffset + 3;

    
    for(let item of sections){
      const sectionTop = item.offsetTop;
      if (pageYOffset >= sectionTop ) {
        current = item.getAttribute("id"); 
      }
    }
    
    for(let item of links){
      item.classList.remove("active");
      if (item.classList.contains(current)) {
        item.classList.add("active");
      }
    }
    
    console.log(current)
    

  // sections.forEach((section) => {
  //   const sectionTop = section.offsetTop;
  //   if (pageYOffset >= sectionTop ) {
  //     current = section.getAttribute("id"); }
  // });

  // navLi.forEach((li) => {
  //   li.classList.remove("active");
  //   if (li.classList.contains(current)) {
  //     li.classList.add("active");
  //   }
  // });
    
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "#174E84";
        document.getElementById("navbar").style.boxShadow = "#191919 0px 0px 50px inset";
        // document.getElementById("navbar").style.padding = "10px 5px";
        document.getElementById("logo").style.width = "50px";
        document.getElementById("scrollProgress").style.width = `${progressWidth}%`;
        // const links = document.getElementsByClassName("nav-link")

        // for(let i=0 ;i<links.length; i++){
        //     links[i].classList.add("text-dark")
        // }

      } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.boxShadow = "none";
        // document.getElementById("navbar").style.padding = "5px 5px";
        document.getElementById("logo").style.width = "70px";
        document.getElementById("navBody").classList.remove("justify-content-end")
        document.getElementById("scrollProgress").style.width = "0";
        // const links = document.getElementsByClassName("nav-link")

        // for(let i=0 ;i<links.length; i++){
        //     links[i].classList.remove("text-dark")
        // }
      }
}