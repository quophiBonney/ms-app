import Banner from "./Banner"
import {render} from '@testing-library/react';
test("on initial render, is search button working", ()=> {
    render (
        <Banner/>
    )
})