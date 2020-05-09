import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Post = ({posts, loading}) => {
  return(
    <div>
        {
          loading ? 'Loading...' :
          posts.map((p) => {
            return(
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  key ={p.id}
                >
                  <Typography>{p.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    {p.body}
                  </Typography>
                </ExpansionPanelDetails>
                </ExpansionPanel>
            )
          })
        }
    </div>
  )
}

export default Post
