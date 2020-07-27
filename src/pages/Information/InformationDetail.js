import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: "100px",
  },
  imageHeader: {
    objectFit: "cover",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
  },
}));
const InformationDetail = () => {
  const classes = useStyles();
  let { slug } = useParams();
  return (
    <div className={classes.content}>
      <Container maxWidth='sm'>
        <Typography variant='h4' gutterbottom>
          Cara Transfer ke Rekening Makersware Official
        </Typography>
        <small>12 April 2020 &middot; Chandra</small>
        <img src='/assets/gojek.svg' className={classes.imageHeader} />
        <Typography variant='body1' gutterbottom>
          Lorem ipsum dolor sit amet Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Nam eu magna
          eu justo tincidunt lobortis pretium blandit est. Nunc posuere tempor
          eros, sed vulputate ipsum vehicula vel. Suspendisse potenti. Duis quis
          mauris nec lorem tincidunt placerat in eget tortor. Praesent a purus
          cursus, consequat mauris et, ultrices ipsum. Nam rutrum neque et
          libero fermentum, vitae tempus elit aliquet. Etiam pellentesque
          hendrerit leo quis ornare. Praesent sagittis arcu magna, a fringilla
          velit feugiat nec. Fusce vestibulum massa eget ipsum iaculis, viverra
          ultrices lorem rutrum. Aenean erat orci, bibendum at libero ut,
          pellentesque viverra mauris. Ut ut consequat risus, sit amet rhoncus
          quam. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Suspendisse pellentesque, justo quis viverra
          placerat, ligula lectus placerat sem, at suscipit velit felis ac
          velit. Suspendisse eget varius sem. Pellentesque eget scelerisque
          neque. Nunc malesuada quam orci, in blandit ligula ultricies sit amet.
          Quisque nec rutrum urna. Proin pulvinar magna vitae nisi maximus, sit
          amet condimentum nibh pellentesque. Integer eu dolor eget purus
          maximus dictum sit amet vitae ligula. Nam ornare ornare lorem. Mauris
          aliquam finibus efficitur. Fusce fermentum lorem dui, ut porta urna
          aliquet a. Curabitur a lacus vehicula, feugiat nulla ut, pellentesque
          eros. Fusce in accumsan massa, a sodales odio. Quisque cursus diam ut
          risus interdum tempor. Nam pretium sollicitudin placerat. Sed
          elementum sollicitudin tellus, vitae aliquam felis consectetur vitae.
          Phasellus massa tortor, porttitor id sodales nec, sagittis ut
          lectus.Curabitur a quam sit amet quam efficitur iaculis non ac ante.
          Integer sed dictum ligula. Donec porttitor dapibus magna vitae ornare.
          Pellentesque eget dolor lorem. Nam a est ut velit commodo pellentesque
          vel a elit. Pellentesque vitae urna ut felis feugiat scelerisque.
          Curabitur maximus tellus at purus sodales mollis. Nunc maximus eros
          tortor, sit amet fringilla nisi eleifend eget. Nunc sit amet elit non
          nibh lacinia laoreet. Sed et dolor et turpis viverra mattis. Donec sed
          turpis sed tortor porttitor venenatis ut quis nulla. Proin ullamcorper
          eget mi eget rhoncus. Vivamus sit amet quam ligula. Curabitur sodales
          dui vitae ante cursus scelerisque. Sed commodo volutpat lacus. Proin
          quam augue, ullamcorper ut dapibus sed, fermentum eget metus. Aliquam
          ac iaculis est. Nulla sit amet convallis ipsum, quis tincidunt quam.
          Vivamus id lectus nec libero pretium posuere. Praesent venenatis, sem
          vel venenatis faucibus, turpis quam euismod mi, ut tincidunt lacus
          purus nec leo. Nunc egestas rutrum odio. Maecenas suscipit metus
          tortor, nec dapibus felis blandit et. Pellentesque bibendum odio id
          lobortis dignissim. Mauris suscipit bibendum ex vitae blandit. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum dui
          sit amet mauris ullamcorper, vel accumsan justo convallis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Ut a ullamcorper dolor, sit amet fermentum lacus.
          Ut vulputate euismod neque a sagittis. Fusce vulputate, turpis sit
          amet maximus lacinia, risus augue luctus velit, sit amet convallis
          mauris leo at nunc. Nunc sit amet malesuada tortor. Nullam porta
          fringilla lacinia. Vivamus lectus purus, pharetra venenatis elementum
          quis, porta id est. Sed urna odio, pretium vitae egestas a, tempus et
          magna. Donec sit amet velit at erat ultricies faucibus. Phasellus
          iaculis odio eget lacus mollis, eu feugiat felis eleifend. Nulla vitae
          ex nisl. Aliquam erat volutpat. Sed nec turpis id nibh scelerisque
          mattis ullamcorper scelerisque ex. Vestibulum suscipit vitae libero et
          sodales. Vivamus interdum vestibulum nulla, et faucibus lorem vehicula
          eget. Donec vitae auctor justo, id condimentum est. Vestibulum et
          pellentesque justo, id dictum lacus. Donec tristique risus
          ullamcorper, elementum lectus ut, blandit eros. Nullam finibus erat et
          est faucibus, sed sagittis massa posuere. Praesent bibendum, augue ac
          dictum fringilla, arcu sem vulputate eros, at malesuada sem odio eu
          magna. Morbi scelerisque semper massa, a pharetra est. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Sed id fringilla risus. Vivamus tincidunt blandit elit sed
          dignissim.
        </Typography>
      </Container>
    </div>
  );
};

export default InformationDetail;
