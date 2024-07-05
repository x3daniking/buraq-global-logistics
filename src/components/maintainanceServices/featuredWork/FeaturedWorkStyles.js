import styled from 'styled-components';

export const FeaturedWorkContainer = styled.div`
 padding: 100px 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 20px;

 h2{
    color: #000000;
    font-size: 42px;
    font-weight: 600;
    text-align: center;
 }

 p{
    color: #000;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    max-width: 700px;
    text-align: center;
 }
 .image-gallery-slide .image-gallery-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
}
.image-gallery-thumbnail .image-gallery-thumbnail-image {
    height: 60px;
}
				
@media (max-width: 1024px) {

   .image-gallery-slide .image-gallery-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
}
.image-gallery-thumbnail {
    width: 70px;
    height: 40px;
}
.image-gallery-thumbnail .image-gallery-thumbnail-image {
    height: 40px;
}
}
							
@media (max-width: 760px) {
   padding: 50px 20px;

   h2{
      font-size: 32px;
   }

   p{
      font-size: 14px;
   }

.image-gallery-slide .image-gallery-image {
 width: 100%;
 height: 250px;
 object-fit: cover;
}
.image-gallery-thumbnail {
 width: 38px;
 height: 20px;
}
.image-gallery-thumbnail .image-gallery-thumbnail-image {
    height: 20px;
}
}

@media (max-width: 400px) {

.image-gallery-slide .image-gallery-image {
 width: 100%;
 height: 250px;
 object-fit: cover;
}
.image-gallery-thumbnail {
 width: 33px;
 height: 20px;
}
.image-gallery-thumbnail .image-gallery-thumbnail-image {
    height: 20px;
}
}

@media (max-width: 350px) {

.image-gallery-slide .image-gallery-image {
 width: 100%;
 height: 200px;
 object-fit: cover;
}
.image-gallery-thumbnail {
 width: 29px;
 height: 20px;
}
.image-gallery-thumbnail .image-gallery-thumbnail-image {
    height: 20px;
}
}
`;