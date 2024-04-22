import IMG1 from '../../assets/image/image_review.png'
import IMG2 from '../../assets/image/image_review2.png'
import IMG3 from '../../assets/image/image_review3.png'

interface TestItem {
    imgSrc: string;
    description: string;
    name: string;
    position: string;
}

export const test: TestItem[] = [
    {
        imgSrc: IMG1,
        description: 'our sea freight offering is complemented by our integrated  warehousing and haulage services, which enables us to offer true door to door services. As a company we believe in independent national carriers, This means we are able serve you global. ',
        name: 'Sarah Chu',
        position: 'Senior Partner'
    },
    {
        imgSrc: IMG2,
        description: 'GEDS is a world leader in global container shipping and company offering global services with local knowledge. GEDS also provide an integrated knowledge of road, rails and sea transport which screeches across the globe. ',
        name: 'Gary Strootman',
        position: 'Senior Partner'
    },
    {
        imgSrc: IMG3,
        description: 'We are privately owned global organization operating with over 560 offices in 150 countries, employing over 36,000 dedicated individuals. we have established fleet of 560 container vessel with an intake capacity.  ',
        name: 'Angela Morison',
        position: 'Senior Partner'
    },
] 