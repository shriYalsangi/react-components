import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 1,
            label: 'Accordion 1',
            content: 'This is accordion 1 content. This is accordion 1 content. This is accordion 1 content. This is accordion 1 content. This is accordion 1 content'
        },
        {
            id: 2,
            label: 'Accordion 2',
            content: 'This is accordion 2 content. This is accordion 2 content. This is accordion 2 content. This is accordion 2 content. This is accordion 2 content. This is accordion 2 content'
        },
        {
            id: 3,
            label: 'Accordion 3',
            content: 'This is accordion 3 content, This is accordion 3 content, This is accordion 3 content, This is accordion 3 content, This is accordion 3 content, This is accordion 3 content, This is accordion 3 content, This is accordion 3 content.'
        }
    ]
   
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage;
