import React from "react";

const images = [
  "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741406222/IMG_20240416_151234_uaofhv.jpg",
  "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741406219/IMG_20240416_101828_nivsgr.jpg",
  "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741406229/IMG_20240416_104218_gyelxt.jpg",
  "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741406229/IMG_5217_edktl0.jpg",
  "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741406229/Screenshot_2024-04-16_at_12.23.02_AM_af3luv.png",
  "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741406229/IMG_5222_nlxl5e.jpg",
  "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741406231/IMG_20240416_102705_ezsv3c.jpg",
  "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741406233/IMG_20240416_101855_p46cyt.jpg",
  "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741406234/_MG_5236_f71vck.jpg",
  "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741406331/Snapchat-1727728028_useloi_a_-90_vtklfz.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-dark-bg text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white uppercase mb-20">
          Event <span className="text-neon-blue">Gallery</span>
        </h2>

        {/* 3D Rotating Gallery for Desktop */}
        <div className="hidden md:flex justify-center mt-24 mb-32">
          <div className="gallery-box">
            {images.map((img, index) => (
              <span key={index} style={{ "--i": index + 1 } as React.CSSProperties}>
                <img src={img} alt={`Gallery ${index + 1}`} />
              </span>
            ))}
          </div>
        </div>

        {/* 3D Rotating Gallery for Mobile */}
        <div className="md:hidden flex justify-center mt-10 mb-16">
          <div className="gallery-box-mobile">
            {images.map((img, index) => (
              <span key={index} style={{ "--i": index + 1 } as React.CSSProperties}>
                <img src={img} alt={`Gallery ${index + 1}`} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Styles for 3D Rotation */}
      <style>
        {`
          /* Base styles for both galleries */
          .gallery-box, .gallery-box-mobile {
            position: relative;
            width: 320px;
            height: 220px;
            transform-style: preserve-3d;
            animation: rotate 40s linear infinite;
            z-index: 0;
          }
          h2 {
            position: relative;
            z-index: 2;
          }

          /* Image position and reflection */
          .gallery-box span, .gallery-box-mobile span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-origin: center;
            transform-style: preserve-3d;
            transform: rotateY(calc(var(--i) * 36deg)) translateZ(600px);
            -webkit-box-reflect: below 4px linear-gradient(transparent, transparent, rgba(4, 4, 4, 0.3));
          }

          /* Image styling */
          .gallery-box span img, .gallery-box-mobile span img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: 0.5s;
            border-radius: 12px;
            border: 3px solid rgb(0, 0, 0);
          }

          /* Hover effect */
          img:hover {
            transform: translateY(-3px);
          }

          /* Keyframes for rotation */
          @keyframes rotate {
            0% { transform: perspective(1200px) rotateY(0deg); }
            100% { transform: perspective(1200px) rotateY(360deg); }
          }

          /* Mobile-specific adjustments */
          @media (max-width: 600px) {
            .gallery-box-mobile {
              width: 220px;
              height: 160px;
            }

            .gallery-box-mobile span {
              transform: rotateY(calc(var(--i) * 36deg)) translateZ(400px);
            }
          }

          @media (max-width: 400px) {
            .gallery-box-mobile {
              width: 180px;
              height: 130px;
            }

            .gallery-box-mobile span {
              transform: rotateY(calc(var(--i) * 36deg)) translateZ(300px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
