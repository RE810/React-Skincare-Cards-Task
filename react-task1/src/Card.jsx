function Card({ image, title, price }) {

const discountedPrice = price > 100 ? price * 0.9 : price;

  return (
    <div className="card shadow shadow-pink-200 rounded-xl p-5 text-center font-bold w-[27%] border-3 border-pink-200 hover:scale-102 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-row justify-center items-center">
        <img src={image} className="w-35 h-40 object-contain"/>
      </div>
      <h3 className="text-lg text-pink-500">{title}</h3>
       {price > 100 ? (
        <>
          <div className="flex flex-row gap-3 justify-center items-center font-bold">
            <p className="line-through text-pink-300"> {price} EGP </p>
            <p>{discountedPrice} EGP</p>
          </div>
        </>
      ) : (
        <p className="text-center font-bold">{price} EGP</p>
      )}
    </div>
  );
}

export default Card;
