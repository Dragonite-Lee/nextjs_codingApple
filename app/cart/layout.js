

export default function Layout({ children }) {
    return (
      <div>
        <div className="sub-nav">
            <p>현대카드 무이자이벤트중</p>
        </div>
        {children}
      </div>        
    )
  }