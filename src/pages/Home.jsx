import SearchBar from "../components/SearchBar";
import HotelCard from "../components/HotelCard";
import hotels from "../data/hotels";

export default function Home() {
    return (
        <>
            <section className="hero-a25">
                <div className="hero-overlay-a25"></div>

                <div className="hero-text-a25">
                    Hệ thống khách sạn A25 <br /> Trải dài khắp Việt Nam
                </div>

                <SearchBar />
            </section>

            <section className="section-a25">
                <h2 className="section-title-a25">Ưu đãi nổi bật</h2>

                <div className="cards-a25">
                    {hotels.slice(0, 3).map(hotel => (
                        <HotelCard key={hotel.id} hotel={hotel} />
                    ))}
                </div>
            </section>
        </>
    );
}
