import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

const UpdatesSvg = ({width = 278, height = 184}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 278 184"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_1316_3104)">
      <Path
        d="M203.245 184C195.558 182.795 188.168 181.77 181.074 180.925L183.806 175.454C182.857 175.138 178.748 178.303 178.748 178.303L182.225 162.478C177.484 163.111 175.271 179.252 175.271 179.252L169.898 173.872L172.543 179.964C150.833 177.68 132.1 176.967 116.353 177.13L118.691 172.448C117.743 172.131 113.634 175.296 113.634 175.296L117.111 159.471C112.369 160.104 110.157 176.246 110.157 176.246L104.783 170.865L107.585 177.317C96.7982 177.631 86.0347 178.499 75.3368 179.918C77.67 172.639 85.818 165.643 85.818 165.643C79.553 167.594 76.2936 170.774 74.6066 173.721C74.2653 158.769 76.5626 143.873 81.3928 129.719C81.3928 129.719 68.7492 158.205 70.6458 177.195L70.8864 180.568C59.8867 182.287 54.3672 184 54.3672 184H203.245Z"
        fill="#3F3D56"
      />
      <Path
        d="M232.222 144.796C231.472 144.796 230.738 144.574 230.114 144.156C229.491 143.739 229.005 143.146 228.717 142.452C228.43 141.758 228.355 140.994 228.502 140.257C228.648 139.521 229.009 138.844 229.54 138.313C230.07 137.782 230.746 137.42 231.482 137.273C232.218 137.127 232.98 137.202 233.673 137.489C234.366 137.777 234.959 138.264 235.376 138.888C235.792 139.513 236.015 140.247 236.015 140.998C236.014 142.005 235.614 142.971 234.903 143.683C234.192 144.395 233.227 144.795 232.222 144.796ZM232.222 137.833C231.597 137.833 230.985 138.019 230.466 138.367C229.946 138.714 229.541 139.209 229.302 139.787C229.062 140.365 229 141.002 229.122 141.616C229.244 142.23 229.545 142.794 229.987 143.236C230.429 143.679 230.992 143.98 231.605 144.103C232.218 144.225 232.854 144.162 233.431 143.922C234.009 143.683 234.503 143.277 234.85 142.757C235.197 142.236 235.383 141.624 235.383 140.998C235.382 140.159 235.048 139.355 234.456 138.761C233.863 138.168 233.06 137.834 232.222 137.833Z"
        fill="#3F3D56"
      />
      <Path
        d="M262.511 183.502H256.271V177.254H262.511V183.502ZM256.751 183.021H262.031V177.734H256.751V183.021Z"
        fill="#3F3D56"
      />
      <Path
        d="M51.2523 183.844L46.9961 179.274L51.5592 175.013L55.8154 179.582L51.2523 183.844ZM47.6745 179.298L51.2759 183.164L55.137 179.558L51.5356 175.692L47.6745 179.298Z"
        fill="#3F3D56"
      />
      <Path d="M278 183.149H6.85059V183.782H278V183.149Z" fill="#3F3D56" />
      <Path
        d="M174.947 42.3356V63.1237C174.946 63.3157 174.87 63.4998 174.734 63.6356C174.599 63.7714 174.415 63.8479 174.223 63.8484H173.708V172.14C173.708 175.137 172.519 178.011 170.402 180.13C168.286 182.249 165.416 183.439 162.423 183.44H94.8468C93.3651 183.439 91.898 183.147 90.5291 182.579C89.1603 182.011 87.9166 181.179 86.869 180.13C85.8214 179.08 84.9905 177.835 84.4237 176.464C83.8569 175.093 83.5653 173.624 83.5656 172.14V67.6465H83.1926C83.0573 67.6467 82.9274 67.5932 82.8314 67.4977C82.7354 67.4022 82.6812 67.2724 82.6806 67.1369V55.306C82.6805 55.2387 82.6938 55.172 82.7195 55.1098C82.7452 55.0476 82.783 54.991 82.8305 54.9434C82.8781 54.8958 82.9345 54.858 82.9966 54.8323C83.0588 54.8065 83.1254 54.7933 83.1926 54.7933H83.5656V50.3369H83.1894C83.0474 50.3363 82.9114 50.2794 82.8112 50.1785C82.7111 50.0776 82.655 49.9411 82.6553 49.7988V38.1293C82.6556 37.9876 82.712 37.8517 82.8121 37.7515C82.9122 37.6513 83.0479 37.5948 83.1894 37.5944H83.5656V31.5112H83.1831C83.1208 31.5113 83.0591 31.4991 83.0016 31.4752C82.944 31.4514 82.8917 31.4164 82.8477 31.3723C82.8036 31.3282 82.7687 31.2759 82.7449 31.2182C82.7211 31.1606 82.7089 31.0988 82.709 31.0364V24.6684C82.7087 24.5421 82.7585 24.4208 82.8474 24.3312C82.9362 24.2416 83.057 24.191 83.1831 24.1905H83.5656V11.2961C83.5657 8.3002 84.7543 5.42708 86.8699 3.30868C88.9855 1.19029 91.8549 0.000139635 94.8468 3.05177e-05H162.423C165.416 1.69739e-05 168.285 1.19003 170.402 3.30835C172.518 5.42668 173.707 8.29987 173.708 11.2961V41.6109H174.223C174.415 41.6114 174.599 41.6879 174.734 41.8237C174.87 41.9595 174.946 42.1436 174.947 42.3356Z"
        fill="#3F3D56"
      />
      <Path
        d="M131.892 5.79422H120.911C120.467 5.79422 120.107 6.15442 120.107 6.59874V7.54909C120.107 7.99341 120.467 8.35361 120.911 8.35361H131.892C132.335 8.35361 132.695 7.99341 132.695 7.54909V6.59874C132.695 6.15442 132.335 5.79422 131.892 5.79422Z"
        fill="#E6E8EC"
      />
      <Path
        d="M136.047 8.52561C136.848 8.52561 137.497 7.87567 137.497 7.07392C137.497 6.27217 136.848 5.62222 136.047 5.62222C135.247 5.62222 134.598 6.27217 134.598 7.07392C134.598 7.87567 135.247 8.52561 136.047 8.52561Z"
        fill="#E6E8EC"
      />
      <Path
        d="M168.305 13.5307V173.077C168.306 174.115 168.082 175.14 167.647 176.082C167.213 177.023 166.579 177.859 165.789 178.531C164.494 179.636 162.848 180.243 161.146 180.243H96.4582C95.3073 180.245 94.173 179.968 93.152 179.436C92.9121 179.313 92.6799 179.176 92.4566 179.025C91.4843 178.368 90.688 177.482 90.1374 176.445C89.5868 175.408 89.2989 174.252 89.2988 173.077V13.5307C89.2988 12.5893 89.4839 11.657 89.8437 10.7873C90.2035 9.91748 90.7309 9.12718 91.3957 8.46148C92.0605 7.79579 92.8498 7.26774 93.7184 6.90748C94.587 6.54723 95.518 6.36184 96.4582 6.36188H106.14V7.60574C106.14 9.17126 106.761 10.6727 107.867 11.7796C108.972 12.8866 110.472 13.5085 112.035 13.5085H144.934C146.497 13.5085 147.996 12.8866 149.102 11.7796C150.208 10.6727 150.829 9.17126 150.829 7.60574V6.36188H161.146C162.086 6.36157 163.017 6.54679 163.886 6.90695C164.755 7.26711 165.544 7.79514 166.209 8.46089C166.874 9.12664 167.401 9.91705 167.761 10.7869C168.121 11.6568 168.306 12.5892 168.305 13.5307Z"
        fill="#FF3F8F"
      />
      <Path
        opacity="0.3"
        d="M168.305 150.239V173.077C168.306 174.115 168.082 175.14 167.647 176.082C167.213 177.023 166.579 177.859 165.789 178.531C164.494 179.636 162.848 180.243 161.146 180.243H96.4582C95.3073 180.245 94.173 179.968 93.152 179.436C92.9121 179.313 92.6799 179.176 92.4566 179.025C91.4843 178.368 90.688 177.482 90.1374 176.445C89.5868 175.408 89.2989 174.252 89.2988 173.077V150.248C100.146 140.485 114.215 135.083 128.8 135.081C143.385 135.079 157.456 140.478 168.305 150.239Z"
        fill="white"
      />
      <Path
        opacity="0.3"
        d="M164.458 179.43C163.436 179.967 162.299 180.246 161.145 180.243H96.4577C95.3067 180.245 94.1724 179.968 93.1514 179.436C96.0798 172.384 101.029 166.358 107.373 162.118C113.718 157.879 121.175 155.617 128.802 155.616C136.43 155.615 143.887 157.877 150.233 162.115C156.578 166.353 161.528 172.378 164.458 179.43Z"
        fill="white"
      />
      <Path
        opacity="0.3"
        d="M150.379 179.812C149.761 180.138 149.073 180.307 148.374 180.305H109.23C108.534 180.306 107.847 180.138 107.229 179.816C109.002 175.549 111.996 171.902 115.836 169.337C119.675 166.772 124.187 165.403 128.803 165.402C133.419 165.402 137.931 166.77 141.771 169.335C145.611 171.899 148.606 175.545 150.379 179.812Z"
        fill="white"
      />
      <Path
        d="M145.258 68.1278C138.769 68.1278 131.647 66.8905 126.088 62.7155C118.348 56.9028 108.812 57.213 102.175 58.4971C97.7665 59.3572 93.4876 60.7843 89.4447 62.743L89.1523 62.1817C93.2447 60.1975 97.5759 58.7512 102.039 57.8788C108.806 56.5673 118.537 56.2539 126.467 62.2092C141.323 73.3658 167.925 63.3456 168.192 63.2434L168.418 63.8344C163.43 65.6148 158.27 66.8725 153.023 67.5872C150.449 67.9387 147.855 68.1193 145.258 68.1278Z"
        fill="white"
      />
      <Path
        opacity="0.3"
        d="M89.2949 62.4623C89.2949 62.4623 111.105 57.1728 126.277 64.4151C141.45 71.6573 168.317 64.3613 168.317 64.3613"
        fill="white"
      />
      <Path
        opacity="0.3"
        d="M109.886 70.6791C107.251 70.6672 104.624 70.4045 102.039 69.8944C97.5759 69.022 93.2447 67.5757 89.1523 65.5915L89.4447 65.0302C93.4876 66.9889 97.7665 68.416 102.175 69.2761C108.811 70.56 118.348 70.8704 126.088 65.0577C134.011 59.1075 145.109 59.1242 153.023 60.186C158.27 60.9007 163.43 62.1584 168.418 63.9388L168.192 64.5298C167.925 64.4273 141.324 54.4069 126.467 65.564C121.267 69.4694 115.292 70.6791 109.886 70.6791Z"
        fill="white"
      />
      <Path
        opacity="0.3"
        d="M109.993 68.1304C99.0453 68.1304 89.3236 64.1977 89.1777 64.1376L89.4185 63.5522C89.6349 63.6415 111.257 72.3825 126.116 63.5726C141.233 54.6092 168.126 62.6101 168.396 62.692L168.213 63.2978C167.946 63.2168 141.316 55.2962 126.438 64.1172C121.361 67.1276 115.52 68.1304 109.993 68.1304Z"
        fill="white"
      />
      <Path
        opacity="0.3"
        d="M89.2988 63.358C89.2988 63.358 111.106 70.6003 126.278 63.358C141.45 56.1158 168.305 62.6737 168.305 62.6737"
        fill="white"
      />
      <Path
        d="M173.934 82.7342V91.9612C173.934 91.9612 174.671 102.295 178.725 107.463C178.725 107.463 185.36 116.874 186.282 114.844L185.147 108.161L181.306 104.51L179.278 93.0685L178.725 82.7342H173.934Z"
        fill="#FFB8B8"
      />
      <Path
        d="M214.663 166.146V172.974L209.135 175.004V167.069L214.663 166.146Z"
        fill="#FFB8B8"
      />
      <Path
        d="M203.422 165.408L207.108 173.712L201.948 175.927L200.842 167.807L203.422 165.408Z"
        fill="#FFB8B8"
      />
      <Path
        d="M212.636 101.742C212.636 101.742 220.008 168.361 217.244 168.545C214.479 168.73 209.135 172.236 209.135 169.837C209.135 167.438 204.896 136.251 204.896 136.251L200.841 120.196V142.341L205.08 167.438C205.08 167.438 201.026 172.79 198.077 169.652L191.811 145.109C191.811 145.109 183.517 107.832 183.886 104.879C183.886 104.879 202.869 88.6395 212.636 101.742Z"
        fill="#2F2E41"
      />
      <Path
        d="M211.162 173.343C211.162 173.343 212.636 170.206 215.954 172.236L218.718 175.558C218.718 175.558 225.845 181.468 220.788 182.734C215.575 184.039 212.452 182.651 212.452 182.651C212.452 182.651 211.531 182.097 210.793 182.097C210.056 182.097 208.397 180.805 208.397 180.436C208.397 180.067 208.95 173.528 208.95 173.528C209.159 173.426 209.394 173.389 209.624 173.422C209.854 173.455 210.068 173.556 210.24 173.712C210.793 174.266 211.162 173.343 211.162 173.343Z"
        fill="#2F2E41"
      />
      <Path
        d="M200.288 172.236C200.288 172.236 203.79 169.468 205.449 172.605C205.449 172.605 206.493 172.974 206.616 172.605C206.739 172.236 207.66 172.051 207.66 174.081C207.66 176.111 208.661 181.174 207.739 181.359C206.818 181.543 205.896 182.097 206.081 182.835C206.265 183.573 205.08 183.677 200.841 183.493C196.602 183.308 196.418 181.647 196.418 181.647C196.418 181.647 196.418 179.248 197.524 177.957C198.63 176.665 200.288 172.236 200.288 172.236Z"
        fill="#2F2E41"
      />
      <Path
        d="M193.47 51.3624C193.47 51.3624 192.548 58.1904 198.446 60.5894C204.343 62.9884 185.361 70.9236 183.518 66.3101C181.675 61.6967 183.886 60.2203 183.886 60.2203C183.886 60.2203 185.729 58.3749 184.07 53.3924L193.47 51.3624Z"
        fill="#FFB8B8"
      />
      <Path
        d="M187.572 56.1605C192.051 56.1605 195.681 52.5252 195.681 48.0408C195.681 43.5564 192.051 39.9211 187.572 39.9211C183.093 39.9211 179.463 43.5564 179.463 48.0408C179.463 52.5252 183.093 56.1605 187.572 56.1605Z"
        fill="#FFB8B8"
      />
      <Path
        d="M196.971 62.804C196.971 62.804 191.442 65.7566 186.098 63.5421C180.753 61.3276 180.937 70.9237 180.937 70.9237L183.702 78.1207L202.869 76.2753L201.579 65.203L196.971 62.804Z"
        fill="#F2F2F2"
      />
      <Path
        d="M194.225 56.4896C195.206 56.6981 196.129 57.1252 196.923 57.739C197.718 58.3529 198.364 59.1379 198.815 60.0358L207.661 62.8039L209.872 65.9411L207.292 88.6395C207.292 88.6395 212.084 93.253 212.084 95.8365C212.084 98.4201 217.981 107.278 215.033 106.171C212.084 105.064 206.739 101.188 206.739 101.188C206.739 101.188 193.286 101.742 189.047 105.433C184.808 109.123 183.149 108.016 183.149 108.016C183.149 108.016 178.726 88.824 178.542 85.8714C178.358 82.9188 173.197 65.2029 173.197 65.2029L182.412 60.0358L184.759 57.3693L191.258 67.7865L197.156 60.5895C197.156 60.5895 194.242 58.2949 194.225 56.4896Z"
        fill="#3F3D56"
      />
      <Path
        d="M212.636 80.1507L213.742 86.0559C213.742 86.0559 218.718 104.51 217.981 110.784C217.981 110.784 218.534 124.809 215.401 123.148C212.268 121.488 213.926 111.338 213.926 111.338L209.503 93.0685L207.107 82.3651L212.636 80.1507Z"
        fill="#FFB8B8"
      />
      <Path
        d="M208.029 64.8339L209.872 65.9412C209.872 65.9412 216.875 80.5198 215.216 81.627C213.558 82.7343 206.37 85.1333 206.37 85.1333L208.029 64.8339Z"
        fill="#3F3D56"
      />
      <Path
        d="M177.62 65.203L173.289 65.1106L172.275 66.8637L173.565 84.7643L180.2 86.2405L177.62 65.203Z"
        fill="#3F3D56"
      />
      <Path
        d="M194.175 41.1736L195.637 40.6414C195.637 40.6414 192.581 37.5812 188.329 37.8474L189.525 36.6499C189.525 36.6499 186.602 35.5855 183.944 38.3795C182.547 39.8483 180.931 41.5747 179.923 43.5195H178.358L179.011 44.8279L176.725 46.1362L179.072 45.9012C178.849 47.0307 178.926 48.1988 179.294 49.2895L179.825 50.7531C179.825 50.7531 181.951 46.4955 181.951 45.9633V47.2938C181.951 47.2938 183.413 46.0964 183.413 45.2981L184.21 46.2294L184.608 44.7659L189.525 46.2294L188.728 45.032L191.784 45.4311L190.588 43.9676C190.588 43.9676 194.043 45.6972 194.175 47.1608C194.308 48.6243 195.22 50.532 195.22 50.532L196.326 49.2403C196.326 49.2403 198.029 43.1693 194.175 41.1736Z"
        fill="#2F2E41"
      />
      <Path
        d="M194.391 49.7939C194.747 49.7939 195.036 49.0503 195.036 48.1331C195.036 47.2158 194.747 46.4722 194.391 46.4722C194.035 46.4722 193.746 47.2158 193.746 48.1331C193.746 49.0503 194.035 49.7939 194.391 49.7939Z"
        fill="#FFB8B8"
      />
      <Path
        d="M13.1593 173.133C17.0878 180.428 25.4255 183.56 25.4255 183.56C25.4255 183.56 27.3938 174.864 23.4653 167.569C19.5368 160.274 11.1992 157.142 11.1992 157.142C11.1992 157.142 9.23084 165.838 13.1593 173.133Z"
        fill="#3F3D56"
      />
      <Path
        d="M15.8602 170.733C22.9528 175.006 25.6843 183.493 25.6843 183.493C25.6843 183.493 16.9166 185.052 9.82409 180.779C2.73156 176.506 0 168.02 0 168.02C0 168.02 8.7677 166.46 15.8602 170.733Z"
        fill="#FF3F8F"
      />
      <Path
        opacity="0.3"
        d="M89.2988 62.4623C89.2988 62.4623 111.106 51.0681 126.278 62.4623C141.45 73.8565 168.305 63.5389 168.305 63.5389"
        fill="white"
      />
      <Path
        d="M128.885 178.406C130.805 178.406 132.362 176.847 132.362 174.924C132.362 173.001 130.805 171.443 128.885 171.443C126.965 171.443 125.408 173.001 125.408 174.924C125.408 176.847 126.965 178.406 128.885 178.406Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1316_3104">
        <Rect width="278" height="184" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default UpdatesSvg;