import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import theme from '../../design-system/theme';

const Envelope = ({width = 16, height = 16, color = theme.colors.grey500}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M14.4994 3.48808C14.4992 3.47884 14.4987 3.46961 14.498 3.46039C14.4974 3.45287 14.4967 3.44539 14.4958 3.43797C14.4947 3.42934 14.4934 3.42075 14.4918 3.41217C14.4905 3.4044 14.489 3.3967 14.4872 3.38907C14.4854 3.38095 14.4832 3.37291 14.481 3.36487C14.4789 3.35715 14.4766 3.34947 14.4741 3.3419C14.4715 3.33406 14.4686 3.32633 14.4656 3.3186C14.4627 3.31117 14.4597 3.3038 14.4565 3.29656C14.4531 3.28897 14.4494 3.28151 14.4456 3.27406C14.442 3.26692 14.4383 3.25986 14.4343 3.25293C14.4303 3.24585 14.426 3.23889 14.4216 3.23197C14.4171 3.22488 14.4125 3.21793 14.4076 3.21109C14.4031 3.20474 14.3984 3.19852 14.3936 3.19232C14.3881 3.18529 14.3824 3.17845 14.3765 3.17172C14.3738 3.16858 14.3714 3.16524 14.3686 3.16214C14.3662 3.15952 14.3635 3.15729 14.3611 3.15474C14.355 3.14842 14.3488 3.14233 14.3424 3.13634C14.3365 3.13078 14.3306 3.12529 14.3245 3.12007C14.3185 3.11493 14.3123 3.11008 14.3061 3.10522C14.2992 3.09991 14.2924 3.09465 14.2854 3.08975C14.2793 3.0855 14.273 3.08154 14.2667 3.07756C14.2592 3.07286 14.2518 3.06818 14.2442 3.0639C14.2375 3.06017 14.2307 3.05679 14.2238 3.05335C14.2163 3.04961 14.2089 3.04584 14.2012 3.04248C14.1937 3.03914 14.1859 3.03622 14.1781 3.03325C14.1709 3.03052 14.1638 3.02772 14.1565 3.02533C14.1481 3.02258 14.1397 3.02028 14.1311 3.01798C14.124 3.01604 14.1169 3.01407 14.1097 3.01245C14.1012 3.01056 14.0926 3.00906 14.084 3.0076C14.0763 3.0063 14.0687 3.00504 14.061 3.00409C14.0528 3.00308 14.0446 3.00243 14.0363 3.00183C14.0278 3.00122 14.0194 3.00073 14.011 3.00055C14.0073 3.00047 14.0037 3 14 3H2C1.99658 3 1.99329 3.00044 1.98987 3.00052C1.98078 3.0007 1.97175 3.00121 1.96268 3.00189C1.95496 3.00246 1.9473 3.00307 1.9397 3.00398C1.9314 3.00499 1.92316 3.00635 1.91492 3.00777C1.90686 3.00916 1.89881 3.01055 1.89087 3.0123C1.88312 3.01404 1.87549 3.01615 1.8678 3.01825C1.8598 3.02043 1.85181 3.0226 1.84397 3.02518C1.83622 3.02771 1.82865 3.03066 1.82102 3.03357C1.81366 3.03641 1.80628 3.03917 1.79907 3.04233C1.79114 3.04581 1.78336 3.04975 1.77555 3.05367C1.76898 3.05696 1.76242 3.0602 1.75605 3.06378C1.7482 3.06816 1.74057 3.07297 1.73294 3.07781C1.72684 3.08167 1.72071 3.08549 1.71479 3.08963C1.70761 3.09462 1.70066 3.09998 1.69373 3.10539C1.68756 3.11017 1.68146 3.11495 1.67557 3.12C1.66941 3.12526 1.66346 3.1308 1.6575 3.13642C1.65116 3.14238 1.64496 3.14844 1.63892 3.15473C1.63648 3.15729 1.63382 3.15952 1.63141 3.16214C1.62857 3.16524 1.62622 3.16858 1.62347 3.17173C1.61762 3.17845 1.61194 3.18529 1.60642 3.19233C1.60156 3.19852 1.59689 3.20475 1.59238 3.21109C1.58753 3.21793 1.58289 3.22489 1.5784 3.23197C1.57398 3.2389 1.5697 3.24585 1.56567 3.25293C1.56171 3.25986 1.55801 3.26693 1.55438 3.27407C1.5506 3.28151 1.54694 3.28898 1.54355 3.29656C1.54031 3.30381 1.53735 3.31118 1.53446 3.31861C1.53143 3.32633 1.52853 3.33407 1.52594 3.34191C1.52341 3.34948 1.52115 3.35715 1.51898 3.36487C1.51675 3.37291 1.51462 3.38096 1.51276 3.38907C1.51105 3.3967 1.50955 3.40441 1.50818 3.41218C1.50665 3.42075 1.50531 3.42934 1.50424 3.43798C1.50333 3.44541 1.50258 3.45288 1.50201 3.46039C1.50128 3.46962 1.50081 3.47886 1.50061 3.48809C1.50052 3.49209 1.5 3.49598 1.5 3.5V12C1.5003 12.2651 1.60576 12.5193 1.79323 12.7068C1.9807 12.8942 2.23488 12.9997 2.5 13H13.5C13.7651 12.9997 14.0193 12.8942 14.2068 12.7068C14.3942 12.5193 14.4997 12.2651 14.5 12V3.5C14.5 3.49597 14.4995 3.49208 14.4994 3.48808ZM13.5 12H2.50001V4.63666L7.66212 9.36859C7.75435 9.45311 7.87491 9.5 8.00001 9.5C8.12511 9.5 8.24567 9.45311 8.3379 9.36859L13.5001 4.63657L13.5006 12L13.5 12Z"
      fill={color}
    />
  </Svg>
);

export default Envelope;