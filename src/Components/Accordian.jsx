// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function DisabledAccordion() {
//   return (
//     <div >
//       <Accordion sx={{marginBottom :"20px"}}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion sx={{marginBottom :"20px"}}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
   
//     </div>
//   );
// }
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DisabledAccordion() {
  return (
    <div>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Accordion sx={{ marginBottom: "20px",marginTop:"20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className='flex items-center'> 
            <i class="fa-solid fa-water pe-5 text-zinc-300"></i>
            <p className=' text-zinc-400'>Water</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} md={6}>
        <Accordion sx={{ marginBottom: "20px",marginTop:"20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
           <Typography className='flex items-center'> 
            <i class="fa-solid fa-sun pe-5 text-zinc-300"></i>
            <p className=' text-zinc-400'>sunlight</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Accordion sx={{ marginBottom: "20px",marginTop:"20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className='flex items-center'> 
            <i class="fa-solid fa-droplet pe-5 text-zinc-300"></i>
            <p className=' text-zinc-400'>Humadity</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} md={6}>
        <Accordion sx={{ marginBottom: "20px",marginTop:"20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
           <Typography className='flex items-center'> 
            <i class="fa-solid fa-tornado pe-5 text-zinc-300"></i>
            <p className=' text-zinc-400'>Soil</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Accordion sx={{ marginBottom: "20px",marginTop:"20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
     <Typography className='flex items-center'> 
            <i class="fa-solid fa-scissors pe-5 text-zinc-300"></i>
            <p className=' text-zinc-400'>Prunning</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} md={6}>
        <Accordion sx={{ marginBottom: "20px",marginTop:"20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='flex items-center'> 
            <i class="fa-solid fa-skull-crossbones pe-5 text-zinc-300"></i>
            <p className=' text-zinc-400'>Toxicty</p>
           
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
    </div>
  );
}
