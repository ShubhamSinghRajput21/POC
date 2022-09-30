import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
import theme from '../../design-system/theme';

const KoupleLogo = ({
  width = 75,
  height = 14,
  color = theme.colors.brand500,
}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M3.978.038C2.282.255.76 1.574.22 3.294.002 3.99-.06 4.842.06 5.53c.331 1.899 1.67 3.412 6.267 7.076 1.482 1.183 1.704 1.346 1.864 1.377a.886.886 0 0 0 .688-.148c.416-.295 2.44-1.921 2.428-1.956-.004-.024-.16-.168-.343-.323l-.334-.284-.88.704c-.482.389-.952.739-1.046.778-.233.109-.447.097-.684-.027-.308-.168-2.521-1.953-3.855-3.116-.681-.591-1.766-1.669-2.085-2.07C1.18 6.421.839 5.471.94 4.394c.085-.925.467-1.723 1.14-2.4.37-.37.735-.618 1.194-.805.502-.21.89-.276 1.474-.249.712.031 1.268.206 1.887.591.373.234.564.25.75.063.222-.222.187-.506-.093-.74C7.051.657 6.246.28 5.837.17a4.923 4.923 0 0 0-1.86-.132Z"
      fill={color}
    />
    <Path
      d="M11.575.038a5.126 5.126 0 0 0-2.14.848c-.342.249-.995.895-1.163 1.151a4.8 4.8 0 0 0-.828 2.513c-.059 1.245.35 2.33 1.346 3.575.817 1.02 2.707 2.692 5.741 5.092.899.708 1.023.782 1.315.782.296 0 .311-.012 2.167-1.494 4.407-3.52 5.722-4.998 6.13-6.897.098-.463.09-1.322-.023-1.816-.319-1.432-1.155-2.575-2.388-3.268C20.37-.238 18.538-.16 17.13.72c-.354.218-.44.326-.44.54a.45.45 0 0 0 .3.432c.17.074.268.043.657-.198 1.023-.642 2.35-.743 3.42-.257.793.362 1.544 1.14 1.905 1.98.222.506.304.922.308 1.505 0 .627-.094 1.035-.362 1.6-.358.746-.704 1.193-1.712 2.193-.793.794-1.548 1.459-2.96 2.61-1.536 1.253-2.019 1.619-2.201 1.67a.828.828 0 0 1-.627-.079c-.093-.054-1.163-.906-2.528-2.01-.05-.04-.035-.067.09-.176 1.89-1.637 2.96-2.875 3.415-3.952.295-.708.354-.996.354-1.836 0-.619-.012-.766-.09-1.07-.377-1.49-1.307-2.645-2.63-3.271a4.492 4.492 0 0 0-2.454-.362ZM12.87.99c1.335.272 2.447 1.35 2.856 2.758.077.272.089.397.089.972 0 .576-.012.7-.09.973-.167.58-.532 1.233-1.034 1.848-.479.583-1.4 1.49-2.253 2.21l-.338.287-.28-.241c-1.618-1.389-2.598-2.482-3.046-3.4-.334-.685-.389-.93-.385-1.696.004-.58.012-.677.105-.984.233-.755.638-1.366 1.28-1.91a3.91 3.91 0 0 1 1.793-.836c.339-.059.98-.047 1.303.019Z"
      fill={color}
    />
    <G clipPath="url(#a)" fill={color}>
      <Path d="M38.583 2.479c-.837.068-1.512.325-2.105.8a4.419 4.419 0 0 0-.5.507c-.483.607-.802 1.405-.92 2.297a8.155 8.155 0 0 0-.05 1.352c.075 1.327.482 2.37 1.209 3.102a3.46 3.46 0 0 0 1.794.959c.316.065.353.068.894.072.465.004.51.003.665-.017.866-.11 1.563-.438 2.124-1 .838-.836 1.259-2.094 1.23-3.67a6.481 6.481 0 0 0-.063-.84c-.175-1.275-.73-2.282-1.588-2.886-.524-.368-1.08-.575-1.763-.657a7.424 7.424 0 0 0-.927-.02Zm.79.697c.499.054.926.194 1.291.427.292.185.605.498.817.82.45.68.665 1.597.644 2.735a6.09 6.09 0 0 1-.117 1.14c-.23 1.14-.838 1.97-1.724 2.35-.368.16-.752.236-1.228.247a3.573 3.573 0 0 1-.92-.082c-1.107-.248-1.859-1.05-2.175-2.319a5.699 5.699 0 0 1-.16-1.34c-.03-1.68.45-2.88 1.41-3.522.412-.275.91-.431 1.498-.47.165-.011.488-.004.665.014ZM28.239 2.521a.36.36 0 0 0-.248.28c-.015.07-.016 8.364-.001 8.442a.355.355 0 0 0 .205.27c.06.028.075.031.164.031.13 0 .185-.018.26-.089a.482.482 0 0 0 .123-.186c.009-.023.013-.548.017-2.04l.005-2.009 2.47 2.106a390.874 390.874 0 0 0 2.526 2.145c.087.058.153.073.239.06a.314.314 0 0 0 .196-.11.34.34 0 0 0 .085-.332c-.034-.104.012-.062-2.417-2.148A408.336 408.336 0 0 1 29.53 6.93c.002-.004.983-.852 2.181-1.884a331.38 331.38 0 0 0 2.232-1.93.566.566 0 0 0 .077-.107c.024-.044.028-.063.028-.14 0-.075-.004-.096-.024-.137a.531.531 0 0 0-.189-.18c-.046-.026-.064-.03-.137-.03a.353.353 0 0 0-.128.018c-.035.013-.62.519-2.425 2.098l-2.381 2.08-.005-1.954-.005-1.955-.024-.057a.412.412 0 0 0-.247-.234.673.673 0 0 0-.244.004ZM45.068 2.527a.354.354 0 0 0-.223.238c-.014.048-.016.32-.016 2.797 0 1.79.004 2.796.01 2.895.09 1.346.6 2.246 1.543 2.734.333.172.733.293 1.188.356.183.026 1.122.033 1.324.01.852-.099 1.486-.386 1.967-.891.513-.538.789-1.27.85-2.251.014-.24.013-5.551-.001-5.622a.353.353 0 0 0-.109-.191c-.076-.073-.125-.088-.265-.088-.103 0-.118.002-.168.027a.344.344 0 0 0-.187.223c-.02.062-.02.096-.02 2.776 0 1.718-.004 2.771-.01 2.875-.049.803-.272 1.382-.695 1.806-.371.374-.851.58-1.528.66-.148.016-.74.016-.897 0-.675-.076-1.171-.284-1.533-.646-.334-.333-.548-.788-.642-1.36-.055-.342-.051-.165-.057-3.25l-.006-2.844-.027-.056a.497.497 0 0 0-.192-.189.547.547 0 0 0-.306-.009ZM62.27 2.524a.403.403 0 0 0-.172.121.685.685 0 0 0-.047.086l-.023.05v8.459l.029.052c.055.1.162.17.291.19.086.013 4.74.014 4.834 0 .198-.028.309-.19.275-.4a.302.302 0 0 0-.263-.262c-.04-.008-.703-.01-2.23-.01h-2.172V6.82c0-3.565-.002-3.997-.015-4.049a.36.36 0 0 0-.192-.232c-.046-.021-.07-.025-.163-.027a.486.486 0 0 0-.151.012ZM54.267 2.583a.382.382 0 0 0-.29.316c-.006.036-.008 1.65-.007 4.205l.003 4.146.022.062c.027.078.062.13.111.165a.474.474 0 0 0 .463.024.393.393 0 0 0 .15-.184l.023-.057.003-1.77.002-1.767h1.423c1.483 0 1.556-.002 1.85-.045 1.247-.179 2.03-.908 2.193-2.043.102-.706-.014-1.406-.313-1.898a2.363 2.363 0 0 0-.494-.561c-.446-.357-1.004-.548-1.745-.598a83.4 83.4 0 0 0-1.745-.009c-1.344 0-1.605.003-1.649.014Zm3.487.67c.585.079.959.237 1.247.527.231.233.371.523.441.92.025.143.036.553.019.723-.1.996-.69 1.524-1.82 1.627-.066.006-.65.01-1.5.01h-1.394V3.23l1.443.004c1.273.003 1.455.005 1.564.02ZM69.048 2.582a.394.394 0 0 0-.264.213l-.032.065-.003 4.13c-.002 3.042 0 4.147.008 4.19.03.158.164.277.337.302.088.013 4.844.013 4.932 0a.312.312 0 0 0 .241-.163c.018-.034.02-.057.02-.166 0-.106-.002-.133-.019-.165a.357.357 0 0 0-.148-.133l-.044-.021-2.282-.005-2.283-.005-.003-1.763-.002-1.764 2.151-.002 2.153-.003.055-.026a.344.344 0 0 0 .158-.153c.02-.043.023-.062.023-.157 0-.098-.003-.114-.026-.16a.358.358 0 0 0-.155-.146l-.045-.02-2.155-.006-2.154-.005-.003-1.693-.002-1.695 2.28-.002 2.28-.003.05-.023a.377.377 0 0 0 .153-.142.639.639 0 0 0 0-.323.395.395 0 0 0-.157-.143l-.046-.022-2.484-.002c-1.956-.001-2.496 0-2.534.01Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(27.94 2.43)"
          d="M0 0h46.348v9.142H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default KoupleLogo;