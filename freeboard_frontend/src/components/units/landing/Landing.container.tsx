import router from "next/router"
import LandingPagePresenter from "./Landing.presenter"

const LandingPageContainer = () => {

    const goMarketPage = () => {
        router.push("/market/list")
    }

    return <LandingPagePresenter
    goMarketPage={goMarketPage}
    />


}

export default  LandingPageContainer