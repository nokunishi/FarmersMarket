export function Home() {
    return (
      <>
        <h1 style={{ fontFamily: "Book Antiqua" }}>Welcome!</h1>
        <img
          src="/images/welcome.jpg"
          style={{
            paddingTop: "20px",
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <p style={{ fontFamily: "Georgia" , paddingTop: "20px", fontSize: "20px"}}>
            We are a family-owned business located at the heart of Vancouver.
            Our produces and flowers are harvested with great care and love, and we hope 
            to spread happiness through healthy food :)
        </p>
      </>
    );
}