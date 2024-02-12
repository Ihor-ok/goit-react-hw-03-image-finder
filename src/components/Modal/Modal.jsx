import css from './Modal.module.css'

export default function Modal({largeImageURL}) {
  
  return (
    <>
          <div className={css.modal}>
              <div className={css.modalContent}>
                    {/* <h1>Modal</h1> */}
                  <img src={largeImageURL} alt='largeImage'/>
                </div>
            </div>
    </>
        

  )
};