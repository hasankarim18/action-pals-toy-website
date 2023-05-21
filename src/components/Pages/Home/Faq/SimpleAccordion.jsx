import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {

    const faqArray = [
      {
        faq: "What age range is this toy show suitable for?",
        answer:
          "Our baby toy show is designed for infants and toddlers aged 6 months to 2 years.\nIt provides a safe and engaging environment for their early developmental needs.\nWe also have age-appropriate activities and toys for older children attending with their siblings.",
      },
      {
        faq: "Are the toys in the show safe for babies?",
        answer:
          "Absolutely! Safety is our top priority.\nAll toys showcased in our baby toy show undergo rigorous testing and meet the highest safety standards.\nWe ensure they are free from any choking hazards and made with non-toxic materials.",
      },
      {
        faq: "Can I purchase the toys exhibited at the show?",
        answer:
          "Yes, you can! Many of the toys featured in our baby toy show are available for purchase.\nWe have partnered with reputable vendors who offer a wide range of baby toys at affordable prices.\nYou can find them at designated booths within the show venue.",
      },
      {
        faq: "Is there an entry fee for attending the baby toy show?",
        answer:
          "No, entry to our baby toy show is completely free of charge!\nWe want to create an inclusive and accessible experience for all families.\nCome join us and discover the wonderful world of toys for your little ones.",
      },
      {
        faq: "Can I bring my older children along?",
        answer:
          "Of course! Older children are more than welcome to accompany you to our baby toy show.\nWhile the primary focus is on infants and toddlers, we have additional activities and toys to keep older siblings engaged and entertained.\nIt's a great opportunity for them to bond and explore together.",
      },
    ];


    

  return (
    <div className="faq" >
    {
        faqArray.map((faq,i)=> {
            return (
              <Accordion key={i}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <span className="text-paste font-bold">
                      {faq.faq}
                    </span>{" "}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
        })
    }
     
     
     
    </div>
  );
}
