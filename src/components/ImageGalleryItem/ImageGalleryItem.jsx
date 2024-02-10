import css from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({imgs}) {

  return (
    <>
          {imgs.map((img) => {
              return (<li key={img.webformatURL} className={css.galleryItem}>
                        <img className={css.galleryItemImg} src={img.webformatURL} alt={img.tags} />
                      </li>)
          })}
      
    </>
        

  )
};