import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's your deposit policy?",
    answer: "We require a $25 deposit to secure your appointment. This deposit will be applied to your service cost. Deposits are non-refundable but can be transferred to a future appointment with 24-hour notice."
  },
  {
    question: "Do I need to wash my hair before coming?",
    answer: "Yes, please wash and blow-dry your hair before your appointment. If you haven't prepared your hair, we offer a wash and blow-dry service for an additional $10."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "Yes, we welcome walk-ins! However, appointments are recommended to ensure availability and minimize wait times, especially during busy periods."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards (Visa, MasterCard, American Express), and debit cards. We also accept digital payments through Apple Pay and Google Pay."
  },
  {
    question: "How long do different braid styles typically last?",
    answer: "Box braids and knotless braids typically last 6-8 weeks with proper care. Twists last 4-6 weeks, while cornrows last 2-4 weeks depending on the style and maintenance."
  },
  {
    question: "Can I bring my own hair extensions?",
    answer: "Yes, you can bring your own hair! However, we also carry high-quality synthetic and human hair in various colors and textures. If you bring your own hair, please ensure it's enough for your desired style."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 1-2 weeks in advance, especially for weekends and popular styles like knotless braids. For last-minute appointments, call us to check availability."
  },
  {
    question: "Do you offer hair care advice and products?",
    answer: "Absolutely! Our stylists provide personalized hair care tips and we carry recommended products to help maintain your braids and keep your natural hair healthy."
  },
  {
    question: "What's the difference between box braids and knotless braids?",
    answer: "Knotless braids start with your natural hair and gradually add extensions, creating less tension on your scalp. Box braids begin with a knot at the root. Knotless braids are generally more comfortable and look more natural but take longer to install."
  },
  {
    question: "Can children get their hair braided here?",
    answer: "Yes, we love working with children! We specialize in gentle, age-appropriate styles that are comfortable for young ones. Parents are welcome to stay during the appointment."
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about our services and policies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:7139955676" 
              className="text-primary hover:text-accent font-semibold transition-colors"
            >
              📞 (713) 995-5676 - Bissonnet
            </a>
            <a 
              href="tel:3463747093" 
              className="text-primary hover:text-accent font-semibold transition-colors"
            >
              📞 (346) 374-7093 - Westheimer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}