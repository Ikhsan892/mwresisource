import { GET_LAYOUT_DATA } from "../actionTypes";

const initialState = {
  navbar: {
    title: "",
    navitem: [
      {
        label: "",
        to: "",
      },
    ],
  },
  carousel: [
    {
      label: "",
      link: "",
      imgPath: "",
    },
  ],
  MCarousel: [
    {
      label: "",
      link: "",
      imgPath: "",
    },
  ],
  footer: {
    support_brand: {
      caption: "",
      img: "",
    },
    about: {
      capt: "",
      wa: [],
      alamat: {
        jalan: "",
        kota_kab: "",
        provinsi: "",
        kode_pos: "",
      },
      cta: {
        title: "",
        act: "",
      },
    },
    jam_pelayanan: {
      title_jam_pelayanan: "",
      social_media: {
        instagram: "",
        facebook: "",
        email: "",
      },
      waktu: [
        {
          hari: "",
          jam: "",
        },
      ],
      metode_pembayaran: [
        {
          img: "",
          alt: "",
        },
      ],
    },
    footer_bottom: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LAYOUT_DATA:
      return {
        ...action.layout,
      };
    default:
      return state;
  }
}
