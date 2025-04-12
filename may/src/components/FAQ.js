import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/FAQ.css'; // Assuming you have a CSS file for styling

const FAQ = () => {
  const faqs = [
    {
      question: 'What are Stray Mays Treats?',
      answer: 'Stray Mays Treats are delicious homemade dog treats made with organic and healthy ingredients.',
    },
    {
      question: 'How do I place an order?',
      answer: 'You can place an order directly through our website by adding items to your cart and proceeding to checkout.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to selected countries. Please check our shipping policy for more details.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unopened and unused products. Please contact our customer service for assistance.',
    },
    {
      question: 'Are your treats safe for all dog breeds?',
      answer: 'Yes, our treats are made with all-natural ingredients and are safe for all dog breeds. However, please consult with your veterinarian if your dog has any specific dietary needs or allergies.',
    },
  ];

  return (
    <div className="faq-container mt-5">
      <Typography variant="h2" className="faq-title">
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;


