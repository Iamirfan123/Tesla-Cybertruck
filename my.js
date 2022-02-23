gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    start: "+=800px",
  }
});

let scrollImages = (canvasId, texts, imageFolder) => {
  ScrollTrigger.matchMedia({
    // desktop text timeline
    "(min-width: 800px)": function () {
      // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
      // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
      // Timeline for fading in and fading out the text
    },
    // mobile text timeline
    "(max-width: 799px)": function () {
      // The ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore.
    },
    all: function () {
      console.clear();

      // this is the bit that does the image scrolling
      const canvasIdWithoutHash = canvasId.substring(1);
      const canvas = document.getElementById(canvasIdWithoutHash);
      const context = canvas.getContext("2d");

      canvas.width = 1900;
      canvas.height = 1000;

      //const frameCount = 199;
      //const currentFrame = (index) =>
        //`${imageFolder}/${(index + 1).toString().padStart(4, "0")}.jpg`;

      const frameCount = 826;
const currentFrame = index => (
  `./images/Cybertruck-1_${(index + 1).toString().padStart(5, '0')}.jpg`
);
      
      
      const images = [];
      const products = {
        frame: 0
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }

      tl.to(products, {
        frame: frameCount - 1,
        snap: "frame",
        onUpdate: render
      });

      images[0].onload = render;

      function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[products.frame], 0, 0);

        if (products.frame) {
          //console.log(products.frame);

          if (texts) {
            if (products.frame > 1) {
              tl.to(canvas, { autoAlpha: 1, ease: Power4.easeOut }, 0);
            }

            if (products.frame === frameCount - 1) {
              tl.to(canvas, { autoAlpha: 0, ease: Power4.easeOut }, 0);
            }

            texts.map((text) => {
              let textId = document.getElementById(text.id);
              let isTitle = text.title ? 100 : 300;
              if (products.frame >= text.start && products.frame <= text.end) {
                tl.to(
                  textId,
                  {
                    autoAlpha: 1,
                    x: isTitle,
                    ease: Power4.easeOut
                  },
                  0
                );
              } else {
                tl.to(
                  textId,
                  {
                    autoAlpha: 0,
                    x: -isTitle,
                    ease: Power4.easeOut
                  },
                  0
                );
              }
            });
          }
        }
      }
    }
  });
};

scrollImages(
  "#product-ezgif",
  [
    {
      id: "product-info__description1",
      start: 20,
      end: 200,
      title: false
    },
    {
      id: "product-info__description2",
      start: 20,
      end: 200,
      title: false
    },
    {
      id: "product-info__description3",
      start: 20,
      end: 200,
      title: false
    },
    {
        id: "product-info__description4",
        start: 20,
        end: 200,
        title: false
      },
      {
        id: "product-info__description5",
        start: 20,
        end: 200,
        title: false
      },
      {
        id: "product-info__description6",
        start: 20,
        end: 200,
        title: false
      },
      {
        id: "product-info__description7",
        start: 20,
        end: 200,
        title: false
      },
      {
        id: "product-info__description8",
        start: 20,
        end: 200,
        title: false
      },
      {
        id: "product-info__description9",
        start: 250,
        end: 350,
        title: false
      },
      {
        id: "product-info__description10",
        start: 375,
        end: 400,
        title: false
      },
      {
        id: "product-info__description11",
        start: 410,
        end: 500,
        title: false
      },
      {
        id: "product-info__description12",
        start: 610,
        end: 660,
        title: false
      },
      {
        id: "product-info__description13",
        start: 700,
        end: 800,
        title: false
      },
      {
        id: "product-info__description14",
        start: 700,
        end: 800,
        title: false
      },
      {
        id: "product-info__description15",
        start: 700,
        end: 800,
        title: false
      },
      
    {
      id: "product-title1",
      start: 10,
      end: 826,
      title: true
    }
  ],
  "ezgif"
);

