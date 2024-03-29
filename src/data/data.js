export const coaches = [
    {
      name: "Marko Jokmanovic",
      title: "Main Coach",
      rank: "Black Belt",
      honors: "",
      img: "",
    },
    {
      name: "Djordje Krstajic",
      title: "Coach",
      rank: "Brown Belt",
      honors: "",
      img: "",
    },
    {
      name: "Nikola Radosavljevic",
      title: "Coach",
      rank: "Purple Belt",
      honors: "",
      img: "",
    },
    {
      name: "Remko",
      title: "Coach",
      rank: "Brown Belt",
      honors: "",
      img: "",
    },
    {
      name: "Luka Vasic",
      title: "Coach",
      rank: "Brown Belt",
      honors: "",
      img: "",
    },
  ];


  export const faq = [
    {
        title: "Accordion Item #1",
        desc: `<strong>This is the first item's accordion body.</strong> It is
        shown by default, until the collapse plugin adds the appropriate
        classNamees that we use to style each element. These classNamees control the
        overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.`,
        show: true,
        collapse: true
    },
    {
        title: "Accordion Item #2",
        desc: `<strong>This is the first item's accordion body.</strong> It is
        shown by default, until the collapse plugin adds the appropriate
        classNamees that we use to style each element. These classNamees control the
        overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.`,
        show: false,
        collapse: false
    },
    {
        title: "Accordion Item #3",
        desc: `<strong>This is the first item's accordion body.</strong> It is
        shown by default, until the collapse plugin adds the appropriate
        classNamees that we use to style each element. These classNamees control the
        overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.`,
        show: false,
        collapse: false
    },
  ]


  export const scheduleTable = [
    // {
    //   day:"PON",
    //   tClass:[
    //     {
    //       start: "18:30",
    //       group: "Kids BJJ"
    //     },
    //     {
    //       start: "19:30",
    //       group: "No Gi BJJ"
    //     },
    //     {
    //       start: "20:30",
    //       group: "Gi BJJ"
    //     },
    //     {
    //       start: "18:30",
    //       group: "MMA"
    //     }
    //   ]
    // }
{
    tHead:
      {
      title: "Start",
      classOne: "18:30",
      classTwo: "19:30",
      classThree: "20:30",
      classFour: "20:30"
      },
  
    tBody:
    [{
      title: "Ponedeljak",
      classOne: "Kids Bjj",
      classTwo: "Gi Bjj",
      classThree: "No Gi Bjj",
      classFour: "MMA"
    },
    {
      title: "Utorak",
      classOne: "Kids Judo",
      classTwo: "No Gi Bjj",
      classThree: "Gi Bjj",
      classFour: "MMA"
    },
    {
      title: "Sreda",
      classOne: "Kids Bjj",
      classTwo: "Gi Bjj",
      classThree: "No Gi Bjj",
      classFour: "MMA"
    },
    {
      title: "Četvrtak",
      classOne: "Kids Judo",
      classTwo: "No Gi Bjj",
      classThree: "Gi Bjj",
      classFour: "MMA"
    },
    {
      title: "Petak",
      classOne: "Kids Bjj",
      classTwo: "Gi Bjj",
      classThree: "No Gi Bjj",
      classFour: "MMA"
    },]}
  ]


  export const scheduleTableMob = [
{
    tHead:
      {
          title: "Start",
          classOne: "Pon - Sre - Pet",
          classTwo: "Uto - Čet"
      },
  
    tBody:
    [{
      title: "18:30",
      classOne: "Kids Bjj",
      classTwo: "Kids Judo",
    },
    {
      title: "19:30",
      classOne: "No Gi Bjj",
      classTwo: "Gi Bjj",
    },
    {
      title: "20:30",
      classOne: "Gi Bjj",
      classTwo: "No Gi Bjj"
    },
    {
      title: "20:30",
      classOne: "MMA",
      classTwo: "MMA",
    },
  ]}
  ]



  export const schedule = [

    {
      title: "Start",
      classOne: "18:30",
      classTwo: "19:30",
      classThree: "20:30",
      classFour: "20:30",
    },
    {
      title: "Ponedeljak",
      classOne: "Kids Bjj",
      classTwo: "No Gi Bjj",
      classThree: "Gi Bjj",
      classFour: "MMA"
    },
    {
      title: "Utorak",
      classOne: "Kids Judo",
      classTwo: "Gi Bjj",
      classThree: "No Gi Bjj",
      classFour: "MMA"
    },
    {
      title: "Sreda",
      classOne: "Kids Bjj",
      classTwo: "No Gi Bjj",
      classThree: "Gi Bjj",
      classFour: "MMA"
    },
    {
      title: "Četvrtak",
      classOne: "Kids Judo",
      classTwo: "Gi Bjj",
      classThree: "No Gi Bjj",
      classFour: "MMA"
    },
    {
      title: "Petak",
      classOne: "Kids Bjj",
      classTwo: "No Gi Bjj",
      classThree: "Gi Bjj",
      classFour: "MMA"
    },



    // {
    //   title: "Start",
    //   classOne: "Ponedeljak",
    //   classTwo: "Utorak",
    //   classThree: "Sreda",
    //   classFour: "Četvrtak",
    //   classFive: "Petak"
    // },
    // {
    //   title: "18:30",
    //   classOne: "Kids Bjj",
    //   classTwo: "Kids Judo",
    //   classThree: "Kids Bjj",
    //   classFour: "Kids Judo",
    //   classFive: "Kids Bjj"
    // },
    // {
    //   title: "19:30",
    //   classOne: "No Gi Bjj",
    //   classTwo: "Gi Bjj",
    //   classThree: "No Gi Bjj",
    //   classFour: "Gi Bjj",
    //   classFive: "No Gi Bjj"
    // },
    // {
    //   title: "20:30",
    //   classOne: "Gi Bjj",
    //   classTwo: "No Gi Bjj",
    //   classThree: "Gi Bjj",
    //   classFour: "No Gi Bjj",
    //   classFive: "Gi Bjj"
    // },
    // {
    //   title: "20:30",
    //   classOne: "MMA",
    //   classTwo: "MMA",
    //   classThree: "MMA",
    //   classFour: "MMA",
    //   classFive: "MMA"
    // },
  ]