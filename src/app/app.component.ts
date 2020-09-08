import {AfterViewInit, Component} from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    PSPDFKit.load({
      baseUrl: location.protocol + '//' + location.host + '/assets/',
      document: '/assets/file-sample.pdf',
      container: '#app',
      licenseKey: 'ZM7Jt06pi0iOhKsawpiz-cR4kmZKNqcSuJ-x5bYgFTUwB91g2-rV102bbnJC7jSkCYC8RlYtaZg-U66sqwAAyia1ObvdKzo2ScvSd-Tcelq7pyO8qKawkF_4feO7V9HZpV6YOs10GXbi4TE0ZTHd_t_0_UeThZLwKqu1hqYfjEa-SEpsE9Ftz2-Ys1SoQh_jxn-NF_18Yo9ht6-hv5s3czckfTAl2EmrENa0K2w1cgcEPxl_rRtPti4Xln2QFrX4fWL7QdLzdGRb0eUdAhXY9NFtZEsbOTl92bhF7ArCwl6nxQW_NX_j8QvxogpR_WfweOhHRyn9dvJxZ_RovcrdhUDDXTl_1fT_Wf9u6ZK_GaB2-AGIfh7aRUKTtlpFtFL_zQ8aVa5Fw3no0ELKpoQK-lW_yLI2OqfkfPA_6bphby6TdkCv3quqj_Ah7Rznfv53',
    }).then((instance) => {
      (window as any).instance = instance;
    });

  }

}
