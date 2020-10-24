import { GET_LAYOUT_DATA } from "../actionTypes";

let initialState = {
  home: {
    navbar: {
      img: "/assets/mwlogo.png",
    },
    first_part: {
      img: "/assets/mwlogo2.png",
      right: {
        capt: "Makersware Service Center",
        subt: "Life is Your Choice",
        cta: {
          to: "https://wa.me/6288210891684",
          headline: "Booking Service",
        },
      },
      background:
        "https://image.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148430351.jpg",
    },
    second_part: {
      h2: "Kenapa Harus Service di Kami?",
      paragraph: "Berikut 4 keunggulan kami dibanding yang lain",
      right: {
        img: "/assets/offer.png",
      },
      left: {
        img: "none",
      },
    },
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LAYOUT_DATA:
      return {
        ...state,
      };
      break;
    default:
      return state;
  }
}
