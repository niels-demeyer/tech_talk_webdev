interface AppConfig {
  name: string;
  github: {
    title: string;
    url: string;
  };
  author: {
    name: string;
    url: string;
  };
}

export const appConfig: AppConfig = {
  name: "FauxPix",
  github: {
    title: "Faux Pix",
    url: "https://github.com/niels-demeyer/fauxpix",
  },
  author: {
    name: "Niels Demeyer",
    url: "https://github.com/niels-demeyer",
  },
};
