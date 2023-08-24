import { useState } from 'react';

interface FAQ {
  title: string;
  text: string;
}

const faqs: FAQ[] = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

type ItemProps = {
  num: number;
  title: string;
  children: string;
  curOpen: number | null;
  onOpen: (arg: number | null) => void;
};

function Item({ num, title, curOpen, onOpen, children }: ItemProps) {
  const isOpen: boolean = num === curOpen;

  function handleOpenAccordion() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`item ${isOpen ? 'open' : null}`}
      onClick={handleOpenAccordion}
    >
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen ? <div className="content-box">{children}</div> : null}
    </div>
  );
}

type AccordionProps = {
  data: FAQ[];
};

function Accordion({ data }: AccordionProps) {
  const [curOpen, setCurOpen] = useState<number | null>(null);

  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <Item
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={faq.title}
          num={i + 1}
          key={faq.text}
        >
          {faq.text}
        </Item>
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
