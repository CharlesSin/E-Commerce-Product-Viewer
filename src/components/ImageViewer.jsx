import React, { useState } from "react"
import style from "./imageviewer.module.scss"

//icons
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import { ImCancelCircle } from "react-icons/im"

const FILE_PATH = `${import.meta.env.VITE_FILE_PATH}`

const productData = {
  id: 1,
  title: "Clothes",
  price: 199.99,
  description:
    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  images: [`/${FILE_PATH}/image001.jpg`, `/${FILE_PATH}/image002.jpg`, `/${FILE_PATH}/image003.jpg`, `/${FILE_PATH}/image004.jpg`],
  rating: 3.5,
}

const ImagesViewer = () => {
  const [data, setData] = useState({ image: productData.images[0], index: 0 })
  const [modal, setModal] = useState(false)

  const imgAction = (action) => {
    let i = data.index
    if (action === "next-img") {
      setData({ image: productData.images[i + 1], index: i + 1 })
    }
    if (action === "previos-img") {
      setData({ image: productData.images[i - 1], index: i - 1 })
    }
  }

  return (
    <>
      {modal && (
        <div className={style.modal}>
          <ImCancelCircle size="2rem" color="white" onClick={() => setModal(false)} className={style.closeModalBtn} />
          {data.index !== 0 && <IoIosArrowBack size="3rem" color="white" onClick={() => imgAction("previos-img")} className={style.previousBtn} />}

          <img src={data.image} alt="" />
          {data.index !== productData.images.length - 1 && <IoIosArrowForward size="3rem" color="white" onClick={() => imgAction("next-img")} className={style.nextBtn} />}
        </div>
      )}
      <div className={style.productViewerSection}>
        <div className={style.row}>
          <div className={style.columOne}>
            {productData.images.map((image, index) => {
              return index < 4 ? (
                <div key={index} onClick={() => setData({ image, index })} className={style.productRow} style={{ border: data.image === image ? "1px solid blue" : "" }}>
                  <img src={image} alt="" />
                </div>
              ) : null
            })}
          </div>
          <div className={style.columTwo}>
            <div className={style.displayProduct} onClick={() => setModal(true)}>
              <div>
                <img src={data ? data.image : productData.images[0]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImagesViewer
