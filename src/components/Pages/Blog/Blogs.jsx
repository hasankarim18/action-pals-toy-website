/* eslint-disable react/no-unescaped-entities */

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useTitle from "../../Hooks/useTitle";

export default function Blogs() {
    useTitle("Blogs")

    
  return (
    <div className="mt-20">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <span className="text-xl font-semibold">Question 1:</span>
            <span className="text-xl font-semibold">
              What is an access token and refresh token? How do they work and
              where should we store them on the client side?
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Access token and refresh token is a way of performing
            authenticationa and authorization of a user in a web app or website
            or a system.
          </Typography>
          <Typography>
            <strong>Access Token: </strong> <br />
            Access token is issues from the server on the behalf of a user. When
            a user is logged in a system a access token is issued which will
            perform the authorization of the user and determines what kind of
            data the user could access. It is short lived token this token is
            sent to the server for each request the user is making to the server
            to access protected data and resuorces. One the token got expire a
            refresh token generate another access token.
          </Typography>
          <Typography>
            <strong>Refresh Token:</strong> <br />A refresh token is also issued
            for a user it is a long lived token and saved in the server. Once
            the access token in the client side got expired the refresh token
            regenerates another access token to for the user. Refresh token has
            longer life than access token, once the refresh token got expired
            user needs to re-authenticate to the system.
          </Typography>
          <Typography>
            <strong>How do they work:</strong> <br />
            When a user logs in teh server a access token and a refresh token is
            issued to the server and the access token is send to the cliet and
            save in the clint side and the refresh token is securely saved in
            the server side. Whenever a client is making an api request the
            access token is sent through the headers of the request and the
            authenticate level is checked in the server and the user get
            response accodingly.
            <br />
            When the access token got expires, the client can use the refresh
            token to request for a new access token from the server which is
            saved in the server, which will increase the user's authenticated
            and authorization session without re-entering their credentials
            again.
          </Typography>
          <Typography>
            <strong>Storage</strong>: Access token and refresh token are should
            be saved on a secure placee. For access token it is generally saved
            in the HTTP-only cookie which will mitigate the hacking attack it
            might be saved in the browser local storage but it is not
            recomended.
            <br />
            Refresh token should be saved in the server side because they have
            long life than access token and needs more security.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* second question */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <span className="text-xl font-semibold">Question 2:</span>
            <span className="text-xl font-semibold">
              Compare SQL and NoSQL database?
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <span className="grid grid-cols-2 gap-8">
              <span className="border  p-4">
                <span className="text-xl">SQL:</span>
                <span >
                  <li>
                    SQL databases are relational, called structured query
                    language
                  </li>
                  <li>SQL have predefined schemas</li>
                  <li>SQL databases are vertically scalable,</li>
                  <li>SQL databases are table-based.</li>
                  <li>
                    SQL data base is suitable for structured data and
                    application which needs consistancy and relational database
                  </li>
                </span>
              </span>
              <span className="border  p-4">
                <span className="text-xl">NoSQL:</span>
                <span>
                  <li>
                    NoSQL databases are non-relational, stands for NOT ONLY SQL.
                  </li>
                  <li>NoSQL is non relational and have dynamic schemas</li>
                  <li>NoSQL databases are horizontally scalable.</li>
                  <li>
                    NoSQL databases are document based have key-value pair and
                    support json.
                  </li>
                  <li>
                    {" "}
                    NoSQL is not structured can handle large amount of data and
                    flexible
                  </li>
                </span>
              </span>
            </span>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* question 3 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div>
            <span className="text-xl font-semibold">Question 3:</span>
            <span className="text-xl font-semibold">
              What is express js? What is Nest js?
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Express js</strong>: <br />
            Express js is a framework of node js. It is a minimalistic and
            flexible approach of node js. Express js is not opinionated which
            gives more control to the application behaviour. <br />
            Express.js is lightweight and provides a minimal features out of the
            box. Express js provides routing, middleware, and simple
            request/response handling. Express.js is highly scalable which
            allows developers to add additional functionality via third-party
            middleware and libraries.
          </Typography>
          <Typography>
            <strong>Nest js</strong>: <br />
            Nest js is also a framework build on the top of node js, it is
            opinionated in nature scalable server side application. It is build
            with typescript. Nest.js aim is to simplify the development process
            and improve developer productivity by conventional approach. It
            encourages the use of modular and reusable code which makes it
            suitable for building large-scale applications and microservices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* question 4 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div>
            <span className="text-xl font-semibold">Question 4:</span>
            <span className="text-xl font-semibold">
              What is MongoDb aggregate and how does it work?
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Mongodb aggregate is a framework for mongodb which perform
            aggregation operations and collect values from multiple documents
            and make a group of them together and single result.
            <br />
            <i>Basic syntax of aggregate</i> is
            <br />
            <strong>db.collection.aggregate(aggregation operation)</strong>{" "}
            <br />
            Data aggregation follow a pipeline strategies. ggregate operations
            in MongoDB consist of one or more pipeline stages. 
            Each stage
            performs a specific operation on the input data and passes the
            results to the next stage.  
            <br/> 
            there are some operators of agrragation.
            <span className="list-disc">
                <li>$match - Filters documents on criteria </li>
                <li>$group - Group documents according to values  </li>
                <li>$sort - sort data by given criteria </li>
                <li>$project - reshape the document and select or exclude data on the given criteria </li>
                <li>$limit -- Limits the number of documents of output</li>
            </span>
            <span className="list-disc">
              <li>1. </li>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
