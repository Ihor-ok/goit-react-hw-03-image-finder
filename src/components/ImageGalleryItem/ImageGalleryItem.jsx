import css from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({imgs}) {

  return (
    <>
          {imgs.map((img) => {
              return (<li key={img.id} className={css.galleryItem}>
                        <img className={css.galleryItemImg} src={img.previewURL} alt={img.tags} />
                      </li>)
          })}
      
    </>
        

  )
};