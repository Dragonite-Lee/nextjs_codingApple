import Image from "next/image";
import tomato from '/public/food0.png'

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
    상품.map((a)=>{
      return 'Apples'
    })//이렇게 return하면 return값을 추가해서 어레이를 남겨줌 근데, 배열의 수만큼 담기게 됨 Apples, Apples, Apples
    return (
        <div>
        <h2 className="title">Products</h2>
        {
          상품.map((data,index) => {
            return (
              <div className="food" key={index}>
                {/* 일반 이미지 넣는 법*/}
                {/* 참고로 이미지는 퍼블릭폴더에 저장하며, alt를 이용하면 검색에도 이점이 있음 */}
                <img src={`/food${index}.png`} className="food-img" />
                {/* laze loading 사이즈 최적화 layout shift방지등 최적화된 이미지로 넣을 수 있음 */}
                {/* src주소 import해야함 */}
                {/* <Image src={tomato} className="food-img" /> */}
                {/* 만약 외부이미지를 넣으려고 src="https://s3.amazonaws.com/my-bucket/profile.png" 하려면 width, height 속성이 필요함 */}
                {/* 그리고 next.config.js에서 가져다 쓰겠습니다 하는 도메인 등록, 경로 등록 을 해야한다. */}
                {/* 그리고 반복문 안에서 다른 이미지를 보여주려면 require('이미지 경로')사용 */}
                <h4>{data} $40</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
  