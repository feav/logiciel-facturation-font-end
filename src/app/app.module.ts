import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeOptions } from './theme-options';

// Widgets

// NGX Bootstrap Core



// NGX Bootstrap Buttons

import { ButtonsModule } from 'ngx-bootstrap';

// NGX Bootstrap Collapse

import { CollapseModule } from 'ngx-bootstrap';

// NGX Bootstrap Timepicker

import { TimepickerModule } from 'ngx-bootstrap';

// NGX Bootstrap Typeahead

import { TypeaheadModule } from 'ngx-bootstrap';

// NGX Bootstrap Carousel

import { CarouselModule } from 'ngx-bootstrap';

// NGX Bootstrap Dropdown

import { BsDropdownModule } from 'ngx-bootstrap';

// NGX Bootstrap Datepicker

import { BsDatepickerModule } from 'ngx-bootstrap';

// NGX Bootstrap Modal

import { ModalModule } from 'ngx-bootstrap';

// NGX Bootstrap Pagination

import { PaginationModule } from 'ngx-bootstrap';

// NGX Bootstrap Progress bar

import { ProgressbarModule } from 'ngx-bootstrap';

// NGX Bootstrap Tabs

import { TabsModule } from 'ngx-bootstrap';

// NGX Bootstrap Popover

import { PopoverModule } from 'ngx-bootstrap';

// NGX Bootstrap Tooltip

import { TooltipModule } from 'ngx-bootstrap';

// NGX Bootstrap Accordion

import { AccordionModule } from 'ngx-bootstrap';

// NGX Bootstrap Alert

import { AlertModule } from 'ngx-bootstrap';

// Bootstrap Core



// ApexCharts for Angular

import { NgApexchartsModule } from 'ng-apexcharts';

// Apex Charts



// Perfect Scrollbar

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: false
};

// Ngx UI Switch

import { UiSwitchModule } from 'ngx-ui-switch';

// NG2 File Upload

import { FileUploadModule } from 'ng2-file-upload';

// NGX Dropzone for Angular

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
};

// Formly Core

import { FormlyModule } from '@ngx-formly/core';

// Formly Bootstrap

import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

// Archwizard

import { ArchwizardModule } from 'angular-archwizard';

// AngularEditor

import { AngularEditorModule } from '@kolkov/angular-editor';

// Angular Circle Progress

import { NgCircleProgressModule } from 'ng-circle-progress';

// Angular Gauge Wrapper

import { GaugeModule } from 'angular-gauge';

// Angular Circle Progress

import { NgxGaugeModule } from 'ngx-gauge';

// Angular Ladda2 Buttons Loader

import { LaddaModule } from 'angular2-ladda';

// Angular FullWidth Calendar

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// Date-fns



// NGX Slick Carousel

import { SlickCarouselModule } from 'ngx-slick-carousel';

// jQuery



// Slick Carousel



// NG2 Charts

import { ChartsModule } from 'ng2-charts';

// Chart.js Annotations



// Chart.js Datalabels



// Chart.js



// NGX Context Menu

import { ContextMenuModule } from 'ngx-contextmenu';

// Angular Component Development Kit



// Angular CountUp

import { CountUpModule } from 'countup.js-angular2';

// Dragula for Angular

import { DragulaModule } from 'ng2-dragula';

// NG2 Table

import { Ng2TableModule } from 'ng2-table';

// NG2 Smart Table

import { Ng2SmartTableModule } from 'ng2-smart-table';

// NG2 Completer

import { Ng2CompleterModule } from 'ng2-completer';

// Angular Colorpicker

import { ColorPickerModule } from 'ngx-color-picker';

// NGX Clipboard

import { ClipboardModule } from 'ngx-clipboard';

// NG Select

import { NgSelectModule } from '@ng-select/ng-select';

// NGX Autosize

import { AutosizeModule } from 'ngx-autosize';

// Angular noUiSlider

import { NouisliderModule } from 'ng2-nouislider';

// noUiSlider



// Angular Flags Icons

import { NgxFlagIconCssModule } from 'ngx-flag-icon-css';

// SVG Flags Icons



// Angular Feather Icons

import { FeatherModule } from 'angular-feather';
import { Calendar, Activity, Bell, Settings, Search, Grid, Users, LifeBuoy, CloudDrizzle, Coffee, Box, Briefcase, Layers, Printer } from 'angular-feather/icons';
const icons = {
    Calendar,
    Activity,
    Bell,
    Settings,
    Search,
    Grid,
    Users,
    LifeBuoy,
    CloudDrizzle,
    Coffee,
    Box,
    Briefcase,
    Layers,
    Printer
};

// FontAwesome Regular SVG Icons

import { faSquare, faCheckCircle, faTimesCircle, faDotCircle, faThumbsUp, faComments, faFolderOpen, faTrashAlt, faFileImage, faFileArchive, faLifeRing, faCommentDots, faFolder, faKeyboard, faCalendarAlt, faEnvelope, faAddressCard, faMap, faObjectGroup, faImages, faUser, faLightbulb, faGem, faClock, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar } from '@fortawesome/free-regular-svg-icons';

// FontAwesome Solid SVG Icons

import { faChevronRight, faSitemap, faPrint, faMapMarkerAlt, faTachometerAlt, faAlignCenter, faExternalLinkAlt, faShareSquare, faInfoCircle, faSync, faQuoteRight, faStarHalfAlt, faShapes, faCarBattery, faTable, faCubes, faPager, faCameraRetro, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faUnlockAlt, faDownload, faAward, faPlayCircle, faReply, faUpload, faBars, faEllipsisV, faSave, faSlidersH, faCaretRight, faChevronUp, faPlus, faLemon, faChevronLeft, faTimes, faChevronDown, faFilm, faSearch, faEllipsisH, faCog, faArrowsAltH, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLink } from '@fortawesome/free-solid-svg-icons';

// FontAwesome Brand SVG Icons

import { faFacebook, faTwitter, faAngular, faVuejs, faReact, faHtml5, faGoogle, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';

// Angular FontAwesome Icons

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Angular FontAwesome Icons Core



// Ionicons



// Pe7 Icons



// Socicons Icons



// NG Spin Kit

import { NgSpinKitModule } from 'ng-spin-kit';

// NGX Skeleton Loader

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// Angular Progressbar Core

import { NgProgressModule } from '@ngx-progressbar/core';

// Angular Progressbar router module

import { NgProgressRouterModule } from '@ngx-progressbar/router';

// NGX Spinner

import { NgxSpinnerModule } from 'ngx-spinner';

// Angular Google Maps

import { AgmCoreModule } from '@agm/core';

// Angular SweetAlerts2 Notifications

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// SweetAlerts2 Notifications



// Angular Notifier

import { NotifierModule, NotifierOptions } from 'angular-notifier';
const customNotifierOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 12,
            gap: 10
        }
    },
    theme: 'uifort',
    behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};

// NGX Pagination for Angular

import { NgxPaginationModule } from 'ngx-pagination';

// NGX Ratings for Angular

import { BarRatingModule } from 'ngx-bar-rating';

// Angular Infinite Scroll

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Angular Elegant Trends Graphs

import { TrendModule } from 'ngx-trend';

// Angular Tree Component

import { TreeModule } from 'angular-tree-component';

// UUID



// Angular Tree Grid

import { AngularTreeGridModule } from 'angular-tree-grid';

// NGX Joyride

import { JoyrideModule } from 'ngx-joyride';

// Hamburgers navigation buttons



// NGX Image Cropper

import { ImageCropperModule } from 'ngx-image-cropper';

// Dual listbox

import { AngularDualListBoxModule } from 'angular-dual-listbox';

// Input Mask

import { TextMaskModule } from 'angular2-text-mask';

// Angular Leaflet maps

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Leaflet Maps

import { tileLayer, latLng } from 'leaflet';

// Layouts

import { LeftSidebarComponent } from './layout-blueprints/left-sidebar/left-sidebar.component';
import { CollapsedSidebarComponent } from './layout-blueprints/collapsed-sidebar/collapsed-sidebar.component';
import { MinimalLayoutComponent } from './layout-blueprints/minimal-layout/minimal-layout.component';
import { PresentationLayoutComponent } from './layout-blueprints/presentation-layout/presentation-layout.component';

// Layout components

import { HeaderComponent } from './layout-components/header/header.component';
import { HeaderDotsComponent } from './layout-components/header-dots/header-dots.component';
import { HeaderDrawerComponent } from './layout-components/header-drawer/header-drawer.component';
import { HeaderUserboxComponent } from './layout-components/header-userbox/header-userbox.component';
import { HeaderSearchComponent } from './layout-components/header-search/header-search.component';
import { HeaderMenuComponent } from './layout-components/header-menu/header-menu.component';
import { SidebarCollapsedComponent } from './layout-components/sidebar-collapsed/sidebar-collapsed.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { SidebarHeaderComponent } from './layout-components/sidebar-header/sidebar-header.component';
import { SidebarUserboxComponent } from './layout-components/sidebar-userbox/sidebar-userbox.component';
import { SidebarMenuComponent } from './layout-components/sidebar-menu/sidebar-menu.component';
import { SidebarFooterComponent } from './layout-components/sidebar-footer/sidebar-footer.component';
import { PageTitleComponent } from './layout-components/page-title/page-title.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { ThemeConfiguratorComponent } from './layout-components/theme-configurator/theme-configurator.component';
import { PromoSectionComponent } from './layout-components/promo-section/promo-section.component';
import { ExampleWrapperSimpleComponent } from './layout-components/example-wrapper-simple/example-wrapper-simple.component';
import { ExampleWrapperSeamlessComponent } from './layout-components/example-wrapper-seamless/example-wrapper-seamless.component';
import { ExampleWrapperContainerComponent } from './layout-components/example-wrapper-container/example-wrapper-container.component';

// Example components

import { DashboardDefaultSection1Component } from './example-components/DashboardDefault/dashboard-default-section-1/dashboard-default-section-1.component';
import { DashboardDefaultSection2Component } from './example-components/DashboardDefault/dashboard-default-section-2/dashboard-default-section-2.component';
import { DashboardDefaultSection3Component } from './example-components/DashboardDefault/dashboard-default-section-3/dashboard-default-section-3.component';
import { DashboardDefaultSection4Component } from './example-components/DashboardDefault/dashboard-default-section-4/dashboard-default-section-4.component';
import { DashboardDefaultSection5Component } from './example-components/DashboardDefault/dashboard-default-section-5/dashboard-default-section-5.component';
import { DashboardDefaultSection6Component } from './example-components/DashboardDefault/dashboard-default-section-6/dashboard-default-section-6.component';
import { DashboardDefaultSection7Component } from './example-components/DashboardDefault/dashboard-default-section-7/dashboard-default-section-7.component';
import { DashboardDefaultSection8Component } from './example-components/DashboardDefault/dashboard-default-section-8/dashboard-default-section-8.component';
import { DashboardAnalyticsSection1Component } from './example-components/DashboardAnalytics/dashboard-analytics-section-1/dashboard-analytics-section-1.component';
import { DashboardAnalyticsSection2Component } from './example-components/DashboardAnalytics/dashboard-analytics-section-2/dashboard-analytics-section-2.component';
import { DashboardAnalyticsSection3Component } from './example-components/DashboardAnalytics/dashboard-analytics-section-3/dashboard-analytics-section-3.component';
import { DashboardAnalyticsSection4Component } from './example-components/DashboardAnalytics/dashboard-analytics-section-4/dashboard-analytics-section-4.component';
import { DashboardAnalyticsSection5Component } from './example-components/DashboardAnalytics/dashboard-analytics-section-5/dashboard-analytics-section-5.component';
import { DashboardAnalyticsSection6Component } from './example-components/DashboardAnalytics/dashboard-analytics-section-6/dashboard-analytics-section-6.component';
import { DashboardAnalyticsSection7Component } from './example-components/DashboardAnalytics/dashboard-analytics-section-7/dashboard-analytics-section-7.component';
import { DashboardAnalyticsSection8Component } from './example-components/DashboardAnalytics/dashboard-analytics-section-8/dashboard-analytics-section-8.component';
import { DashboardSalesSection1Component } from './example-components/DashboardSales/dashboard-sales-section-1/dashboard-sales-section-1.component';
import { DashboardSalesSection2Component } from './example-components/DashboardSales/dashboard-sales-section-2/dashboard-sales-section-2.component';
import { DashboardSalesSection3Component } from './example-components/DashboardSales/dashboard-sales-section-3/dashboard-sales-section-3.component';
import { DashboardSalesSection4Component } from './example-components/DashboardSales/dashboard-sales-section-4/dashboard-sales-section-4.component';
import { DashboardSalesSection5Component } from './example-components/DashboardSales/dashboard-sales-section-5/dashboard-sales-section-5.component';
import { DashboardSalesSection6Component } from './example-components/DashboardSales/dashboard-sales-section-6/dashboard-sales-section-6.component';
import { DashboardSalesSection7Component } from './example-components/DashboardSales/dashboard-sales-section-7/dashboard-sales-section-7.component';
import { DashboardSalesSection8Component } from './example-components/DashboardSales/dashboard-sales-section-8/dashboard-sales-section-8.component';
import { DashboardSalesSection9Component } from './example-components/DashboardSales/dashboard-sales-section-9/dashboard-sales-section-9.component';
import { DashboardReportsSection1Component } from './example-components/DashboardReports/dashboard-reports-section-1/dashboard-reports-section-1.component';
import { DashboardReportsSection2Component } from './example-components/DashboardReports/dashboard-reports-section-2/dashboard-reports-section-2.component';
import { DashboardReportsSection3Component } from './example-components/DashboardReports/dashboard-reports-section-3/dashboard-reports-section-3.component';
import { DashboardReportsSection4Component } from './example-components/DashboardReports/dashboard-reports-section-4/dashboard-reports-section-4.component';
import { DashboardReportsSection5Component } from './example-components/DashboardReports/dashboard-reports-section-5/dashboard-reports-section-5.component';
import { DashboardReportsSection6Component } from './example-components/DashboardReports/dashboard-reports-section-6/dashboard-reports-section-6.component';
import { DashboardReportsSection7Component } from './example-components/DashboardReports/dashboard-reports-section-7/dashboard-reports-section-7.component';
import { DashboardReportsSection8Component } from './example-components/DashboardReports/dashboard-reports-section-8/dashboard-reports-section-8.component';
import { DashboardRealEstateSection1Component } from './example-components/DashboardRealEstate/dashboard-real-estate-section-1/dashboard-real-estate-section-1.component';
import { DashboardRealEstateSection2Component } from './example-components/DashboardRealEstate/dashboard-real-estate-section-2/dashboard-real-estate-section-2.component';
import { DashboardRealEstateSection3Component } from './example-components/DashboardRealEstate/dashboard-real-estate-section-3/dashboard-real-estate-section-3.component';
import { DashboardRealEstateSection4Component } from './example-components/DashboardRealEstate/dashboard-real-estate-section-4/dashboard-real-estate-section-4.component';
import { DashboardRealEstateSection5Component } from './example-components/DashboardRealEstate/dashboard-real-estate-section-5/dashboard-real-estate-section-5.component';
import { DashboardRealEstateSection6Component } from './example-components/DashboardRealEstate/dashboard-real-estate-section-6/dashboard-real-estate-section-6.component';
import { DashboardRealEstateSection7Component } from './example-components/DashboardRealEstate/dashboard-real-estate-section-7/dashboard-real-estate-section-7.component';
import { DashboardRealEstateSection8Component } from './example-components/DashboardRealEstate/dashboard-real-estate-section-8/dashboard-real-estate-section-8.component';
import { DashboardServerStatusSection1Component } from './example-components/DashboardServerStatus/dashboard-server-status-section-1/dashboard-server-status-section-1.component';
import { DashboardServerStatusSection2Component } from './example-components/DashboardServerStatus/dashboard-server-status-section-2/dashboard-server-status-section-2.component';
import { DashboardServerStatusSection3Component } from './example-components/DashboardServerStatus/dashboard-server-status-section-3/dashboard-server-status-section-3.component';
import { DashboardServerStatusSection4Component } from './example-components/DashboardServerStatus/dashboard-server-status-section-4/dashboard-server-status-section-4.component';
import { DashboardServerStatusSection5Component } from './example-components/DashboardServerStatus/dashboard-server-status-section-5/dashboard-server-status-section-5.component';
import { DashboardServerStatusSection6Component } from './example-components/DashboardServerStatus/dashboard-server-status-section-6/dashboard-server-status-section-6.component';
import { DashboardServerStatusSection7Component } from './example-components/DashboardServerStatus/dashboard-server-status-section-7/dashboard-server-status-section-7.component';
import { DashboardServerStatusSection8Component } from './example-components/DashboardServerStatus/dashboard-server-status-section-8/dashboard-server-status-section-8.component';
import { DashboardServerStatusSection9Component } from './example-components/DashboardServerStatus/dashboard-server-status-section-9/dashboard-server-status-section-9.component';
import { DashboardProjectsSection1Component } from './example-components/DashboardProjects/dashboard-projects-section-1/dashboard-projects-section-1.component';
import { DashboardProjectsSection2Component } from './example-components/DashboardProjects/dashboard-projects-section-2/dashboard-projects-section-2.component';
import { DashboardProjectsSection3Component } from './example-components/DashboardProjects/dashboard-projects-section-3/dashboard-projects-section-3.component';
import { DashboardProjectsSection4Component } from './example-components/DashboardProjects/dashboard-projects-section-4/dashboard-projects-section-4.component';
import { DashboardProjectsSection5Component } from './example-components/DashboardProjects/dashboard-projects-section-5/dashboard-projects-section-5.component';
import { DashboardProjectsSection6Component } from './example-components/DashboardProjects/dashboard-projects-section-6/dashboard-projects-section-6.component';
import { DashboardProjectsSection7Component } from './example-components/DashboardProjects/dashboard-projects-section-7/dashboard-projects-section-7.component';
import { DashboardProjectsSection8Component } from './example-components/DashboardProjects/dashboard-projects-section-8/dashboard-projects-section-8.component';
import { DashboardProjectsSection9Component } from './example-components/DashboardProjects/dashboard-projects-section-9/dashboard-projects-section-9.component';
import { DashboardHelpdeskSection1Component } from './example-components/DashboardHelpdesk/dashboard-helpdesk-section-1/dashboard-helpdesk-section-1.component';
import { DashboardHelpdeskSection2Component } from './example-components/DashboardHelpdesk/dashboard-helpdesk-section-2/dashboard-helpdesk-section-2.component';
import { DashboardHelpdeskSection3Component } from './example-components/DashboardHelpdesk/dashboard-helpdesk-section-3/dashboard-helpdesk-section-3.component';
import { DashboardHelpdeskSection4Component } from './example-components/DashboardHelpdesk/dashboard-helpdesk-section-4/dashboard-helpdesk-section-4.component';
import { DashboardHelpdeskSection5Component } from './example-components/DashboardHelpdesk/dashboard-helpdesk-section-5/dashboard-helpdesk-section-5.component';
import { DashboardCustomersSection1Component } from './example-components/DashboardCustomers/dashboard-customers-section-1/dashboard-customers-section-1.component';
import { DashboardCustomersSection2Component } from './example-components/DashboardCustomers/dashboard-customers-section-2/dashboard-customers-section-2.component';
import { DashboardCustomersSection3Component } from './example-components/DashboardCustomers/dashboard-customers-section-3/dashboard-customers-section-3.component';
import { DashboardCustomersSection4Component } from './example-components/DashboardCustomers/dashboard-customers-section-4/dashboard-customers-section-4.component';
import { DashboardCustomersSection5Component } from './example-components/DashboardCustomers/dashboard-customers-section-5/dashboard-customers-section-5.component';
import { DashboardCustomersSection6Component } from './example-components/DashboardCustomers/dashboard-customers-section-6/dashboard-customers-section-6.component';
import { DashboardCustomersSection7Component } from './example-components/DashboardCustomers/dashboard-customers-section-7/dashboard-customers-section-7.component';
import { DashboardCryptocurrencySection1Component } from './example-components/DashboardCryptocurrency/dashboard-cryptocurrency-section-1/dashboard-cryptocurrency-section-1.component';
import { DashboardCryptocurrencySection2Component } from './example-components/DashboardCryptocurrency/dashboard-cryptocurrency-section-2/dashboard-cryptocurrency-section-2.component';
import { DashboardCryptocurrencySection3Component } from './example-components/DashboardCryptocurrency/dashboard-cryptocurrency-section-3/dashboard-cryptocurrency-section-3.component';
import { DashboardCryptocurrencySection4Component } from './example-components/DashboardCryptocurrency/dashboard-cryptocurrency-section-4/dashboard-cryptocurrency-section-4.component';
import { DashboardCryptocurrencySection5Component } from './example-components/DashboardCryptocurrency/dashboard-cryptocurrency-section-5/dashboard-cryptocurrency-section-5.component';
import { DashboardCryptocurrencySection6Component } from './example-components/DashboardCryptocurrency/dashboard-cryptocurrency-section-6/dashboard-cryptocurrency-section-6.component';
import { DashboardCryptocurrencySection7Component } from './example-components/DashboardCryptocurrency/dashboard-cryptocurrency-section-7/dashboard-cryptocurrency-section-7.component';
import { DashboardCrmManagerSection1Component } from './example-components/DashboardCrmManager/dashboard-crm-manager-section-1/dashboard-crm-manager-section-1.component';
import { DashboardCrmManagerSection2Component } from './example-components/DashboardCrmManager/dashboard-crm-manager-section-2/dashboard-crm-manager-section-2.component';
import { DashboardCrmManagerSection3Component } from './example-components/DashboardCrmManager/dashboard-crm-manager-section-3/dashboard-crm-manager-section-3.component';
import { DashboardCrmManagerSection4Component } from './example-components/DashboardCrmManager/dashboard-crm-manager-section-4/dashboard-crm-manager-section-4.component';
import { DashboardCrmManagerSection5Component } from './example-components/DashboardCrmManager/dashboard-crm-manager-section-5/dashboard-crm-manager-section-5.component';
import { DashboardCrmManagerSection6Component } from './example-components/DashboardCrmManager/dashboard-crm-manager-section-6/dashboard-crm-manager-section-6.component';
import { DashboardCrmManagerSection7Component } from './example-components/DashboardCrmManager/dashboard-crm-manager-section-7/dashboard-crm-manager-section-7.component';
import { DashboardCrmManagerSection8Component } from './example-components/DashboardCrmManager/dashboard-crm-manager-section-8/dashboard-crm-manager-section-8.component';
import { DashboardContentSection1Component } from './example-components/DashboardContent/dashboard-content-section-1/dashboard-content-section-1.component';
import { DashboardContentSection2Component } from './example-components/DashboardContent/dashboard-content-section-2/dashboard-content-section-2.component';
import { DashboardContentSection3Component } from './example-components/DashboardContent/dashboard-content-section-3/dashboard-content-section-3.component';
import { DashboardContentSection4Component } from './example-components/DashboardContent/dashboard-content-section-4/dashboard-content-section-4.component';
import { DashboardContentSection5Component } from './example-components/DashboardContent/dashboard-content-section-5/dashboard-content-section-5.component';
import { DashboardContentSection6Component } from './example-components/DashboardContent/dashboard-content-section-6/dashboard-content-section-6.component';
import { DashboardContentSection7Component } from './example-components/DashboardContent/dashboard-content-section-7/dashboard-content-section-7.component';
import { ApplicationsCalendarContentComponent } from './example-components/ApplicationsCalendar/applications-calendar-content/applications-calendar-content.component';
import { ApplicationsChatContentComponent } from './example-components/ApplicationsChat/applications-chat-content/applications-chat-content.component';
import { ApplicationsContactsContentComponent } from './example-components/ApplicationsContacts/applications-contacts-content/applications-contacts-content.component';
import { ApplicationsFileManagerContentComponent } from './example-components/ApplicationsFileManager/applications-file-manager-content/applications-file-manager-content.component';
import { ApplicationsMailContentComponent } from './example-components/ApplicationsMail/applications-mail-content/applications-mail-content.component';
import { ApplicationsProjectsContentComponent } from './example-components/ApplicationsProjects/applications-projects-content/applications-projects-content.component';
import { ApplicationsWidgetsChatComponent } from './example-components/ApplicationsWidgets/applications-widgets-chat/applications-widgets-chat.component';
import { ApplicationsWidgetsFilesComponent } from './example-components/ApplicationsWidgets/applications-widgets-files/applications-widgets-files.component';
import { ApplicationsWidgetsTimelineComponent } from './example-components/ApplicationsWidgets/applications-widgets-timeline/applications-widgets-timeline.component';
import { PagesError404ContentComponent } from './example-components/PagesError404/pages-error-404-content/pages-error-404-content.component';
import { PagesError500ContentComponent } from './example-components/PagesError500/pages-error-500-content/pages-error-500-content.component';
import { PagesError505ContentComponent } from './example-components/PagesError505/pages-error-505-content/pages-error-505-content.component';
import { PagesInvoiceContentComponent } from './example-components/PagesInvoice/pages-invoice-content/pages-invoice-content.component';
import { PagesLoginContentComponent } from './example-components/PagesLogin/pages-login-content/pages-login-content.component';
import { PagesProfileContentComponent } from './example-components/PagesProfile/pages-profile-content/pages-profile-content.component';
import { PagesRecoverPasswordContentComponent } from './example-components/PagesRecoverPassword/pages-recover-password-content/pages-recover-password-content.component';
import { PagesRegisterContentComponent } from './example-components/PagesRegister/pages-register-content/pages-register-content.component';
import { AccordionsBasicComponent } from './example-components/Accordions/accordions-basic/accordions-basic.component';
import { AccordionsCollapseComponent } from './example-components/Accordions/accordions-collapse/accordions-collapse.component';
import { AccordionsIntegrationOneComponent } from './example-components/Accordions/accordions-integration-one/accordions-integration-one.component';
import { AccordionsIntegrationTwoComponent } from './example-components/Accordions/accordions-integration-two/accordions-integration-two.component';
import { ApexChartsLineComponent } from './example-components/ApexCharts/apex-charts-line/apex-charts-line.component';
import { ApexChartsAreaComponent } from './example-components/ApexCharts/apex-charts-area/apex-charts-area.component';
import { ApexChartsColumnComponent } from './example-components/ApexCharts/apex-charts-column/apex-charts-column.component';
import { ApexChartsBarComponent } from './example-components/ApexCharts/apex-charts-bar/apex-charts-bar.component';
import { ApexChartsMixedComponent } from './example-components/ApexCharts/apex-charts-mixed/apex-charts-mixed.component';
import { ApexChartsHeatmapComponent } from './example-components/ApexCharts/apex-charts-heatmap/apex-charts-heatmap.component';
import { ApexChartsRadialbarComponent } from './example-components/ApexCharts/apex-charts-radialbar/apex-charts-radialbar.component';
import { ApexChartsRadarComponent } from './example-components/ApexCharts/apex-charts-radar/apex-charts-radar.component';
import { AvatarsBasicComponent } from './example-components/Avatars/avatars-basic/avatars-basic.component';
import { AvatarsSizingComponent } from './example-components/Avatars/avatars-sizing/avatars-sizing.component';
import { AvatarsInitialsComponent } from './example-components/Avatars/avatars-initials/avatars-initials.component';
import { AvatarsBadgesComponent } from './example-components/Avatars/avatars-badges/avatars-badges.component';
import { AvatarsOverlapComponent } from './example-components/Avatars/avatars-overlap/avatars-overlap.component';
import { BadgesBasicComponent } from './example-components/Badges/badges-basic/badges-basic.component';
import { BadgesPillsComponent } from './example-components/Badges/badges-pills/badges-pills.component';
import { BadgesButtonsComponent } from './example-components/Badges/badges-buttons/badges-buttons.component';
import { BadgesDotsComponent } from './example-components/Badges/badges-dots/badges-dots.component';
import { BadgesDotsPositionsComponent } from './example-components/Badges/badges-dots-positions/badges-dots-positions.component';
import { BadgesButtonDotsComponent } from './example-components/Badges/badges-button-dots/badges-button-dots.component';
import { ButtonsBasicComponent } from './example-components/Buttons/buttons-basic/buttons-basic.component';
import { ButtonsGroupsComponent } from './example-components/Buttons/buttons-groups/buttons-groups.component';
import { ButtonsGroupsSizingComponent } from './example-components/Buttons/buttons-groups-sizing/buttons-groups-sizing.component';
import { ButtonsColorsComponent } from './example-components/Buttons/buttons-colors/buttons-colors.component';
import { ButtonsLinksComponent } from './example-components/Buttons/buttons-links/buttons-links.component';
import { ButtonsOutlineComponent } from './example-components/Buttons/buttons-outline/buttons-outline.component';
import { ButtonsSizingComponent } from './example-components/Buttons/buttons-sizing/buttons-sizing.component';
import { ButtonsPillsComponent } from './example-components/Buttons/buttons-pills/buttons-pills.component';
import { ButtonsSquareComponent } from './example-components/Buttons/buttons-square/buttons-square.component';
import { ButtonsGradientsComponent } from './example-components/Buttons/buttons-gradients/buttons-gradients.component';
import { ButtonsLoadingComponent } from './example-components/Buttons/buttons-loading/buttons-loading.component';
import { ButtonsSocialComponent } from './example-components/Buttons/buttons-social/buttons-social.component';
import { ButtonsIconsComponent } from './example-components/Buttons/buttons-icons/buttons-icons.component';
import { CalendarsInlineComponent } from './example-components/Calendars/calendars-inline/calendars-inline.component';
import { CalendarsFullWidthBasicComponent } from './example-components/Calendars/calendars-full-width-basic/calendars-full-width-basic.component';
import { Cards1Examples1Component } from './example-components/Cards1/cards1-examples-1/cards1-examples-1.component';
import { Cards1Examples2Component } from './example-components/Cards1/cards1-examples-2/cards1-examples-2.component';
import { Cards1Examples3Component } from './example-components/Cards1/cards1-examples-3/cards1-examples-3.component';
import { Cards1Examples4Component } from './example-components/Cards1/cards1-examples-4/cards1-examples-4.component';
import { Cards1Examples5Component } from './example-components/Cards1/cards1-examples-5/cards1-examples-5.component';
import { Cards1Examples6Component } from './example-components/Cards1/cards1-examples-6/cards1-examples-6.component';
import { Cards1Examples7Component } from './example-components/Cards1/cards1-examples-7/cards1-examples-7.component';
import { Cards2Examples8Component } from './example-components/Cards2/cards2-examples-8/cards2-examples-8.component';
import { Cards2Examples9Component } from './example-components/Cards2/cards2-examples-9/cards2-examples-9.component';
import { Cards2Examples10Component } from './example-components/Cards2/cards2-examples-10/cards2-examples-10.component';
import { Cards2Examples11Component } from './example-components/Cards2/cards2-examples-11/cards2-examples-11.component';
import { Cards2Examples12Component } from './example-components/Cards2/cards2-examples-12/cards2-examples-12.component';
import { Cards2Examples13Component } from './example-components/Cards2/cards2-examples-13/cards2-examples-13.component';
import { Cards2Examples14Component } from './example-components/Cards2/cards2-examples-14/cards2-examples-14.component';
import { Cards3Examples15Component } from './example-components/Cards3/cards3-examples-15/cards3-examples-15.component';
import { Cards3Examples16Component } from './example-components/Cards3/cards3-examples-16/cards3-examples-16.component';
import { Cards3Examples17Component } from './example-components/Cards3/cards3-examples-17/cards3-examples-17.component';
import { Cards3Examples18Component } from './example-components/Cards3/cards3-examples-18/cards3-examples-18.component';
import { Cards3Examples19Component } from './example-components/Cards3/cards3-examples-19/cards3-examples-19.component';
import { Cards3Examples20Component } from './example-components/Cards3/cards3-examples-20/cards3-examples-20.component';
import { Cards3Examples21Component } from './example-components/Cards3/cards3-examples-21/cards3-examples-21.component';
import { Cards4Examples22Component } from './example-components/Cards4/cards4-examples-22/cards4-examples-22.component';
import { Cards4Examples23Component } from './example-components/Cards4/cards4-examples-23/cards4-examples-23.component';
import { Cards4Examples24Component } from './example-components/Cards4/cards4-examples-24/cards4-examples-24.component';
import { Cards4Examples25Component } from './example-components/Cards4/cards4-examples-25/cards4-examples-25.component';
import { Cards4Examples26Component } from './example-components/Cards4/cards4-examples-26/cards4-examples-26.component';
import { Cards4Examples27Component } from './example-components/Cards4/cards4-examples-27/cards4-examples-27.component';
import { Cards4Examples28Component } from './example-components/Cards4/cards4-examples-28/cards4-examples-28.component';
import { Cards5Examples29Component } from './example-components/Cards5/cards5-examples-29/cards5-examples-29.component';
import { Cards5Examples30Component } from './example-components/Cards5/cards5-examples-30/cards5-examples-30.component';
import { Cards5Examples31Component } from './example-components/Cards5/cards5-examples-31/cards5-examples-31.component';
import { Cards5Examples32Component } from './example-components/Cards5/cards5-examples-32/cards5-examples-32.component';
import { Cards5Examples33Component } from './example-components/Cards5/cards5-examples-33/cards5-examples-33.component';
import { Cards5Examples35Component } from './example-components/Cards5/cards5-examples-35/cards5-examples-35.component';
import { Cards6Examples36Component } from './example-components/Cards6/cards6-examples-36/cards6-examples-36.component';
import { Cards6Examples37Component } from './example-components/Cards6/cards6-examples-37/cards6-examples-37.component';
import { Cards6Examples38Component } from './example-components/Cards6/cards6-examples-38/cards6-examples-38.component';
import { Cards6Examples39Component } from './example-components/Cards6/cards6-examples-39/cards6-examples-39.component';
import { Cards6Examples40Component } from './example-components/Cards6/cards6-examples-40/cards6-examples-40.component';
import { Cards6Examples41Component } from './example-components/Cards6/cards6-examples-41/cards6-examples-41.component';
import { Cards7Examples42Component } from './example-components/Cards7/cards7-examples-42/cards7-examples-42.component';
import { Cards7Examples43Component } from './example-components/Cards7/cards7-examples-43/cards7-examples-43.component';
import { Cards7Examples44Component } from './example-components/Cards7/cards7-examples-44/cards7-examples-44.component';
import { Cards7Examples45Component } from './example-components/Cards7/cards7-examples-45/cards7-examples-45.component';
import { Cards7Examples46Component } from './example-components/Cards7/cards7-examples-46/cards7-examples-46.component';
import { Cards7Examples47Component } from './example-components/Cards7/cards7-examples-47/cards7-examples-47.component';
import { Cards7Examples48Component } from './example-components/Cards7/cards7-examples-48/cards7-examples-48.component';
import { Cards8Examples49Component } from './example-components/Cards8/cards8-examples-49/cards8-examples-49.component';
import { Cards8Examples50Component } from './example-components/Cards8/cards8-examples-50/cards8-examples-50.component';
import { Cards8Examples51Component } from './example-components/Cards8/cards8-examples-51/cards8-examples-51.component';
import { Cards8Examples52Component } from './example-components/Cards8/cards8-examples-52/cards8-examples-52.component';
import { Cards8Examples53Component } from './example-components/Cards8/cards8-examples-53/cards8-examples-53.component';
import { Cards8Examples54Component } from './example-components/Cards8/cards8-examples-54/cards8-examples-54.component';
import { Cards8Examples55Component } from './example-components/Cards8/cards8-examples-55/cards8-examples-55.component';
import { Cards9Examples56Component } from './example-components/Cards9/cards9-examples-56/cards9-examples-56.component';
import { Cards9Examples57Component } from './example-components/Cards9/cards9-examples-57/cards9-examples-57.component';
import { Cards9Examples58Component } from './example-components/Cards9/cards9-examples-58/cards9-examples-58.component';
import { Cards9Examples59Component } from './example-components/Cards9/cards9-examples-59/cards9-examples-59.component';
import { Cards9Examples60Component } from './example-components/Cards9/cards9-examples-60/cards9-examples-60.component';
import { Cards9Examples61Component } from './example-components/Cards9/cards9-examples-61/cards9-examples-61.component';
import { Cards10Examples62Component } from './example-components/Cards10/cards10-examples-62/cards10-examples-62.component';
import { Cards10Examples63Component } from './example-components/Cards10/cards10-examples-63/cards10-examples-63.component';
import { Cards10Examples64Component } from './example-components/Cards10/cards10-examples-64/cards10-examples-64.component';
import { Cards10Examples65Component } from './example-components/Cards10/cards10-examples-65/cards10-examples-65.component';
import { Cards10Examples66Component } from './example-components/Cards10/cards10-examples-66/cards10-examples-66.component';
import { Cards10Examples67Component } from './example-components/Cards10/cards10-examples-67/cards10-examples-67.component';
import { Cards10Examples68Component } from './example-components/Cards10/cards10-examples-68/cards10-examples-68.component';
import { Cards11Examples69Component } from './example-components/Cards11/cards11-examples-69/cards11-examples-69.component';
import { Cards11Examples70Component } from './example-components/Cards11/cards11-examples-70/cards11-examples-70.component';
import { Cards11Examples71Component } from './example-components/Cards11/cards11-examples-71/cards11-examples-71.component';
import { Cards11Examples72Component } from './example-components/Cards11/cards11-examples-72/cards11-examples-72.component';
import { Cards11Examples73Component } from './example-components/Cards11/cards11-examples-73/cards11-examples-73.component';
import { Cards11Examples74Component } from './example-components/Cards11/cards11-examples-74/cards11-examples-74.component';
import { Cards12Examples75Component } from './example-components/Cards12/cards12-examples-75/cards12-examples-75.component';
import { Cards12Examples76Component } from './example-components/Cards12/cards12-examples-76/cards12-examples-76.component';
import { Cards12Examples77Component } from './example-components/Cards12/cards12-examples-77/cards12-examples-77.component';
import { Cards12Examples78Component } from './example-components/Cards12/cards12-examples-78/cards12-examples-78.component';
import { Cards12Examples79Component } from './example-components/Cards12/cards12-examples-79/cards12-examples-79.component';
import { CarouselsBasicComponent } from './example-components/Carousels/carousels-basic/carousels-basic.component';
import { CarouselsSlideshowsComponent } from './example-components/Carousels/carousels-slideshows/carousels-slideshows.component';
import { CarouselsFullWidthComponent } from './example-components/Carousels/carousels-full-width/carousels-full-width.component';
import { CarouselsIntegrationOneComponent } from './example-components/Carousels/carousels-integration-one/carousels-integration-one.component';
import { CarouselsIntegrationTwoComponent } from './example-components/Carousels/carousels-integration-two/carousels-integration-two.component';
import { CarouselsIntegrationThreeComponent } from './example-components/Carousels/carousels-integration-three/carousels-integration-three.component';
import { CarouselsIntegrationFourComponent } from './example-components/Carousels/carousels-integration-four/carousels-integration-four.component';
import { ChartjsChartsLineComponent } from './example-components/ChartJsCharts/chartjs-charts-line/chartjs-charts-line.component';
import { ChartjsChartsBarComponent } from './example-components/ChartJsCharts/chartjs-charts-bar/chartjs-charts-bar.component';
import { ChartjsChartsDoughnutComponent } from './example-components/ChartJsCharts/chartjs-charts-doughnut/chartjs-charts-doughnut.component';
import { ChartjsChartsRadarComponent } from './example-components/ChartJsCharts/chartjs-charts-radar/chartjs-charts-radar.component';
import { ChartjsChartsPolarComponent } from './example-components/ChartJsCharts/chartjs-charts-polar/chartjs-charts-polar.component';
import { ChartjsChartsDynamicComponent } from './example-components/ChartJsCharts/chartjs-charts-dynamic/chartjs-charts-dynamic.component';
import { ContextMenusBasicComponent } from './example-components/ContextMenus/context-menus-basic/context-menus-basic.component';
import { ContextMenusAlternateComponent } from './example-components/ContextMenus/context-menus-alternate/context-menus-alternate.component';
import { CountupBasicComponent } from './example-components/CountUp/countup-basic/countup-basic.component';
import { CountupNumbersComponent } from './example-components/CountUp/countup-numbers/countup-numbers.component';
import { CountupIntegrationOneComponent } from './example-components/CountUp/countup-integration-one/countup-integration-one.component';
import { CountupIntegrationTwoComponent } from './example-components/CountUp/countup-integration-two/countup-integration-two.component';
import { CountupIntegrationThreeComponent } from './example-components/CountUp/countup-integration-three/countup-integration-three.component';
import { DragDropBasicComponent } from './example-components/DragDrop/drag-drop-basic/drag-drop-basic.component';
import { DragDropListsComponent } from './example-components/DragDrop/drag-drop-lists/drag-drop-lists.component';
import { DropdownsBasicComponent } from './example-components/Dropdowns/dropdowns-basic/dropdowns-basic.component';
import { DropdownsSplitComponent } from './example-components/Dropdowns/dropdowns-split/dropdowns-split.component';
import { DropdownsIntegrationsComponent } from './example-components/Dropdowns/dropdowns-integrations/dropdowns-integrations.component';
import { RegularTables1Example1Component } from './example-components/RegularTables1/regular-tables-1-example-1/regular-tables-1-example-1.component';
import { RegularTables2Example2Component } from './example-components/RegularTables2/regular-tables-2-example-2/regular-tables-2-example-2.component';
import { RegularTables2Example3Component } from './example-components/RegularTables2/regular-tables-2-example-3/regular-tables-2-example-3.component';
import { RegularTables3Example4Component } from './example-components/RegularTables3/regular-tables-3-example-4/regular-tables-3-example-4.component';
import { RegularTables3Example5Component } from './example-components/RegularTables3/regular-tables-3-example-5/regular-tables-3-example-5.component';
import { RegularTables4Example6Component } from './example-components/RegularTables4/regular-tables-4-example-6/regular-tables-4-example-6.component';
import { RegularTables4Example7Component } from './example-components/RegularTables4/regular-tables-4-example-7/regular-tables-4-example-7.component';
import { RegularTables5Example8Component } from './example-components/RegularTables5/regular-tables-5-example-8/regular-tables-5-example-8.component';
import { DynamicTables1Example1Component } from './example-components/DynamicTables1/dynamic-tables-1-example-1/dynamic-tables-1-example-1.component';
import { DynamicTables2Example1Component } from './example-components/DynamicTables2/dynamic-tables-2-example-1/dynamic-tables-2-example-1.component';
import { FormsClipboardInputComponent } from './example-components/FormsClipboard/forms-clipboard-input/forms-clipboard-input.component';
import { FormsClipboardTextareaComponent } from './example-components/FormsClipboard/forms-clipboard-textarea/forms-clipboard-textarea.component';
import { FormsColorpickerBasicComponent } from './example-components/FormsColorpicker/forms-colorpicker-basic/forms-colorpicker-basic.component';
import { FormsColorpickerPermanentComponent } from './example-components/FormsColorpicker/forms-colorpicker-permanent/forms-colorpicker-permanent.component';
import { FormsControlsBasicComponent } from './example-components/FormsControls/forms-controls-basic/forms-controls-basic.component';
import { FormsControlsInputGroupsComponent } from './example-components/FormsControls/forms-controls-input-groups/forms-controls-input-groups.component';
import { FormsDatepickerBasicComponent } from './example-components/FormsDatepicker/forms-datepicker-basic/forms-datepicker-basic.component';
import { FormsDatepickerRangeComponent } from './example-components/FormsDatepicker/forms-datepicker-range/forms-datepicker-range.component';
import { FormsDualListboxBasicComponent } from './example-components/FormsDualListbox/forms-dual-listbox-basic/forms-dual-listbox-basic.component';
import { FormsInputMaskBasicComponent } from './example-components/FormsInputMask/forms-input-mask-basic/forms-input-mask-basic.component';
import { FormsInputSelectNgSelectComponent } from './example-components/FormsInputSelect/forms-input-select-ng-select/forms-input-select-ng-select.component';
import { FormsInputSelectMultiselectDropdownComponent } from './example-components/FormsInputSelect/forms-input-select-multiselect-dropdown/forms-input-select-multiselect-dropdown.component';
import { FormsLayoutBasicComponent } from './example-components/FormsLayout/forms-layout-basic/forms-layout-basic.component';
import { FormsLayoutGridsComponent } from './example-components/FormsLayout/forms-layout-grids/forms-layout-grids.component';
import { FormsSliderBasicComponent } from './example-components/FormsSlider/forms-slider-basic/forms-slider-basic.component';
import { FormsSliderTooltipsComponent } from './example-components/FormsSlider/forms-slider-tooltips/forms-slider-tooltips.component';
import { FormsSliderDisabledComponent } from './example-components/FormsSlider/forms-slider-disabled/forms-slider-disabled.component';
import { FormsSliderPipsComponent } from './example-components/FormsSlider/forms-slider-pips/forms-slider-pips.component';
import { FormsSliderColorsComponent } from './example-components/FormsSlider/forms-slider-colors/forms-slider-colors.component';
import { FormsTextareaAutosizeBasicComponent } from './example-components/FormsTextareaAutosize/forms-textarea-autosize-basic/forms-textarea-autosize-basic.component';
import { FormsTextareaAutosizeMinMaxRowsComponent } from './example-components/FormsTextareaAutosize/forms-textarea-autosize-min-max-rows/forms-textarea-autosize-min-max-rows.component';
import { FormsTimepickerBasicComponent } from './example-components/FormsTimepicker/forms-timepicker-basic/forms-timepicker-basic.component';
import { FormsTimepickerCustomStepsComponent } from './example-components/FormsTimepicker/forms-timepicker-custom-steps/forms-timepicker-custom-steps.component';
import { FormsTimepickerToggleMinutesSecondsComponent } from './example-components/FormsTimepicker/forms-timepicker-toggle-minutes-seconds/forms-timepicker-toggle-minutes-seconds.component';
import { FormsTimepickerDynamicComponent } from './example-components/FormsTimepicker/forms-timepicker-dynamic/forms-timepicker-dynamic.component';
import { FormsTimepickerMouseWheelComponent } from './example-components/FormsTimepicker/forms-timepicker-mouse-wheel/forms-timepicker-mouse-wheel.component';
import { FormsToggleSwitchBasicComponent } from './example-components/FormsToggleSwitch/forms-toggle-switch-basic/forms-toggle-switch-basic.component';
import { FormsToggleSwitchColorsComponent } from './example-components/FormsToggleSwitch/forms-toggle-switch-colors/forms-toggle-switch-colors.component';
import { FormsToggleSwitchAlteranteComponent } from './example-components/FormsToggleSwitch/forms-toggle-switch-alterante/forms-toggle-switch-alterante.component';
import { FormsTypeaheadBasicComponent } from './example-components/FormsTypeahead/forms-typeahead-basic/forms-typeahead-basic.component';
import { FormsTypeaheadScrollableComponent } from './example-components/FormsTypeahead/forms-typeahead-scrollable/forms-typeahead-scrollable.component';
import { FormsTypeaheadGroupingComponent } from './example-components/FormsTypeahead/forms-typeahead-grouping/forms-typeahead-grouping.component';
import { FormsTypeaheadItemTemplateComponent } from './example-components/FormsTypeahead/forms-typeahead-item-template/forms-typeahead-item-template.component';
import { FormsUploadDropzoneComponent } from './example-components/FormsUpload/forms-upload-dropzone/forms-upload-dropzone.component';
import { FormsUploadMultiComponent } from './example-components/FormsUpload/forms-upload-multi/forms-upload-multi.component';
import { FormsValidationBasicComponent } from './example-components/FormsValidation/forms-validation-basic/forms-validation-basic.component';
import { FormsValidationFormlyComponent } from './example-components/FormsValidation/forms-validation-formly/forms-validation-formly.component';
import { FormsWizardHorizontalComponent } from './example-components/FormsWizard/forms-wizard-horizontal/forms-wizard-horizontal.component';
import { FormsWizardVerticalComponent } from './example-components/FormsWizard/forms-wizard-vertical/forms-wizard-vertical.component';
import { FormsWizardIntegrationOneComponent } from './example-components/FormsWizard/forms-wizard-integration-one/forms-wizard-integration-one.component';
import { FormsWizardIntegrationTwoComponent } from './example-components/FormsWizard/forms-wizard-integration-two/forms-wizard-integration-two.component';
import { FormsWysiwygEditorAngularEditorComponent } from './example-components/FormsWysiwygEditor/forms-wysiwyg-editor-angular-editor/forms-wysiwyg-editor-angular-editor.component';
import { GaugesChartsBasicComponent } from './example-components/GaugesCharts/gauges-charts-basic/gauges-charts-basic.component';
import { GaugesChartsCircleProgressComponent } from './example-components/GaugesCharts/gauges-charts-circle-progress/gauges-charts-circle-progress.component';
import { GaugesChartsIntegrationOneComponent } from './example-components/GaugesCharts/gauges-charts-integration-one/gauges-charts-integration-one.component';
import { GaugesChartsIntegrationTwoComponent } from './example-components/GaugesCharts/gauges-charts-integration-two/gauges-charts-integration-two.component';
import { GuidedToursBasicComponent } from './example-components/GuidedTours/guided-tours-basic/guided-tours-basic.component';
import { IconsFlagsComponent } from './example-components/Icons/icons-flags/icons-flags.component';
import { IconsFeatherComponent } from './example-components/Icons/icons-feather/icons-feather.component';
import { IconsFontawesomeComponent } from './example-components/Icons/icons-fontawesome/icons-fontawesome.component';
import { IconsIonComponent } from './example-components/Icons/icons-ion/icons-ion.component';
import { IconsPe7Component } from './example-components/Icons/icons-pe7/icons-pe7.component';
import { IconsSociconsComponent } from './example-components/Icons/icons-socicons/icons-socicons.component';
import { ImageCropBasicComponent } from './example-components/ImageCrop/image-crop-basic/image-crop-basic.component';
import { ListGroupsBasicComponent } from './example-components/ListGroups/list-groups-basic/list-groups-basic.component';
import { ListGroupsActionsComponent } from './example-components/ListGroups/list-groups-actions/list-groups-actions.component';
import { ListGroupsVariations1Component } from './example-components/ListGroups/list-groups-variations-1/list-groups-variations-1.component';
import { ListGroupsVariations2Component } from './example-components/ListGroups/list-groups-variations-2/list-groups-variations-2.component';
import { ListGroupsVariations3Component } from './example-components/ListGroups/list-groups-variations-3/list-groups-variations-3.component';
import { ListGroupsVariations4Component } from './example-components/ListGroups/list-groups-variations-4/list-groups-variations-4.component';
import { ListGroupsVariations5Component } from './example-components/ListGroups/list-groups-variations-5/list-groups-variations-5.component';
import { ListGroupsVariations6Component } from './example-components/ListGroups/list-groups-variations-6/list-groups-variations-6.component';
import { ListGroupsVariations7Component } from './example-components/ListGroups/list-groups-variations-7/list-groups-variations-7.component';
import { ListGroupsVariations8Component } from './example-components/ListGroups/list-groups-variations-8/list-groups-variations-8.component';
import { LoadingIndicatorsBasicComponent } from './example-components/LoadingIndicators/loading-indicators-basic/loading-indicators-basic.component';
import { LoadingIndicatorsColorsComponent } from './example-components/LoadingIndicators/loading-indicators-colors/loading-indicators-colors.component';
import { LoadingIndicatorsBlockLoadingComponent } from './example-components/LoadingIndicators/loading-indicators-block-loading/loading-indicators-block-loading.component';
import { LoadingIndicatorsSkeletonLoadingComponent } from './example-components/LoadingIndicators/loading-indicators-skeleton-loading/loading-indicators-skeleton-loading.component';
import { MapsGoogleMapsComponent } from './example-components/Maps/maps-google-maps/maps-google-maps.component';
import { MapsLeafletComponent } from './example-components/Maps/maps-leaflet-maps/maps-leaflet-maps.component';
import { ModalsBasicComponent } from './example-components/Modals/modals-basic/modals-basic.component';
import { ModalsBorderlessComponent } from './example-components/Modals/modals-borderless/modals-borderless.component';
import { ModalsColorsComponent } from './example-components/Modals/modals-colors/modals-colors.component';
import { ModalsConfirmationComponent } from './example-components/Modals/modals-confirmation/modals-confirmation.component';
import { NavigationMenusHorizontalComponent } from './example-components/NavigationMenus/navigation-menus-horizontal/navigation-menus-horizontal.component';
import { NavigationMenusVerticalBasicComponent } from './example-components/NavigationMenus/navigation-menus-vertical-basic/navigation-menus-vertical-basic.component';
import { NavigationMenusVerticalColorsComponent } from './example-components/NavigationMenus/navigation-menus-vertical-colors/navigation-menus-vertical-colors.component';
import { NavigationMenusVerticalAlternateComponent } from './example-components/NavigationMenus/navigation-menus-vertical-alternate/navigation-menus-vertical-alternate.component';
import { NavigationMenusVerticalAlternateLargeComponent } from './example-components/NavigationMenus/navigation-menus-vertical-alternate-large/navigation-menus-vertical-alternate-large.component';
import { NavigationMenusVerticalHeadersComponent } from './example-components/NavigationMenus/navigation-menus-vertical-headers/navigation-menus-vertical-headers.component';
import { NavigationMenusGridComponent } from './example-components/NavigationMenus/navigation-menus-grid/navigation-menus-grid.component';
import { NavigationMenusGridAlternateComponent } from './example-components/NavigationMenus/navigation-menus-grid-alternate/navigation-menus-grid-alternate.component';
import { NavigationMenusGridCondensedComponent } from './example-components/NavigationMenus/navigation-menus-grid-condensed/navigation-menus-grid-condensed.component';
import { NotificationsSweetalertsComponent } from './example-components/Notifications/notifications-sweetalerts/notifications-sweetalerts.component';
import { NotificationsToastrComponent } from './example-components/Notifications/notifications-toastr/notifications-toastr.component';
import { NotificationsToastsComponent } from './example-components/Notifications/notifications-toasts/notifications-toasts.component';
import { NotificationsAlertsBasicComponent } from './example-components/Notifications/notifications-alerts-basic/notifications-alerts-basic.component';
import { NotificationsAlertsDismissibleComponent } from './example-components/Notifications/notifications-alerts-dismissible/notifications-alerts-dismissible.component';
import { NotificationsAlertsAlternateStyleComponent } from './example-components/Notifications/notifications-alerts-alternate-style/notifications-alerts-alternate-style.component';
import { PaginationBasicComponent } from './example-components/Pagination/pagination-basic/pagination-basic.component';
import { PaginationSizingComponent } from './example-components/Pagination/pagination-sizing/pagination-sizing.component';
import { PaginationColorsComponent } from './example-components/Pagination/pagination-colors/pagination-colors.component';
import { PaginationDynamicComponent } from './example-components/Pagination/pagination-dynamic/pagination-dynamic.component';
import { FeatureSections1Component } from './example-components/FeatureSections/feature-sections-1/feature-sections-1.component';
import { FeatureSections2Component } from './example-components/FeatureSections/feature-sections-2/feature-sections-2.component';
import { FeatureSections3Component } from './example-components/FeatureSections/feature-sections-3/feature-sections-3.component';
import { FeatureSections4Component } from './example-components/FeatureSections/feature-sections-4/feature-sections-4.component';
import { FeatureSections5Component } from './example-components/FeatureSections/feature-sections-5/feature-sections-5.component';
import { FeatureSections6Component } from './example-components/FeatureSections/feature-sections-6/feature-sections-6.component';
import { FooterSections1Component } from './example-components/FooterSections/footer-sections-1/footer-sections-1.component';
import { FooterSections2Component } from './example-components/FooterSections/footer-sections-2/footer-sections-2.component';
import { FooterSections3Component } from './example-components/FooterSections/footer-sections-3/footer-sections-3.component';
import { HeaderSections1Component } from './example-components/HeaderSections/header-sections-1/header-sections-1.component';
import { HeaderSections2Component } from './example-components/HeaderSections/header-sections-2/header-sections-2.component';
import { HeaderSections3Component } from './example-components/HeaderSections/header-sections-3/header-sections-3.component';
import { HeaderSections4Component } from './example-components/HeaderSections/header-sections-4/header-sections-4.component';
import { HeaderSections5Component } from './example-components/HeaderSections/header-sections-5/header-sections-5.component';
import { HeaderSections6Component } from './example-components/HeaderSections/header-sections-6/header-sections-6.component';
import { IconBoxes1Component } from './example-components/IconBoxes/icon-boxes-1/icon-boxes-1.component';
import { IconBoxes2Component } from './example-components/IconBoxes/icon-boxes-2/icon-boxes-2.component';
import { IconBoxes3Component } from './example-components/IconBoxes/icon-boxes-3/icon-boxes-3.component';
import { IconBoxes4Component } from './example-components/IconBoxes/icon-boxes-4/icon-boxes-4.component';
import { IconBoxes5Component } from './example-components/IconBoxes/icon-boxes-5/icon-boxes-5.component';
import { IconBoxes6Component } from './example-components/IconBoxes/icon-boxes-6/icon-boxes-6.component';
import { IconBoxes7Component } from './example-components/IconBoxes/icon-boxes-7/icon-boxes-7.component';
import { BlogSections1Component } from './example-components/BlogSections/blog-sections-1/blog-sections-1.component';
import { BlogSections2Component } from './example-components/BlogSections/blog-sections-2/blog-sections-2.component';
import { BlogSections3Component } from './example-components/BlogSections/blog-sections-3/blog-sections-3.component';
import { BlogSections4Component } from './example-components/BlogSections/blog-sections-4/blog-sections-4.component';
import { TestimonialsSections1Component } from './example-components/TestimonialsSections/testimonials-sections-1/testimonials-sections-1.component';
import { TestimonialsSections2Component } from './example-components/TestimonialsSections/testimonials-sections-2/testimonials-sections-2.component';
import { TestimonialsSections3Component } from './example-components/TestimonialsSections/testimonials-sections-3/testimonials-sections-3.component';
import { TestimonialsSections4Component } from './example-components/TestimonialsSections/testimonials-sections-4/testimonials-sections-4.component';
import { PartnersSections1Component } from './example-components/PartnersSections/partners-sections-1/partners-sections-1.component';
import { PartnersSections2Component } from './example-components/PartnersSections/partners-sections-2/partners-sections-2.component';
import { PartnersSections3Component } from './example-components/PartnersSections/partners-sections-3/partners-sections-3.component';
import { PartnersSections4Component } from './example-components/PartnersSections/partners-sections-4/partners-sections-4.component';
import { CtaBoxes1Component } from './example-components/CtaBoxes/cta-boxes-1/cta-boxes-1.component';
import { CtaBoxes2Component } from './example-components/CtaBoxes/cta-boxes-2/cta-boxes-2.component';
import { CtaBoxes3Component } from './example-components/CtaBoxes/cta-boxes-3/cta-boxes-3.component';
import { CtaBoxes4Component } from './example-components/CtaBoxes/cta-boxes-4/cta-boxes-4.component';
import { PricingTables1Component } from './example-components/PricingTables/pricing-tables-1/pricing-tables-1.component';
import { PricingTables2Component } from './example-components/PricingTables/pricing-tables-2/pricing-tables-2.component';
import { PricingTables3Component } from './example-components/PricingTables/pricing-tables-3/pricing-tables-3.component';
import { PricingTables4Component } from './example-components/PricingTables/pricing-tables-4/pricing-tables-4.component';
import { HeroSections1Component } from './example-components/HeroSections/hero-sections-1/hero-sections-1.component';
import { HeroSections2Component } from './example-components/HeroSections/hero-sections-2/hero-sections-2.component';
import { HeroSections3Component } from './example-components/HeroSections/hero-sections-3/hero-sections-3.component';
import { HeroSections4Component } from './example-components/HeroSections/hero-sections-4/hero-sections-4.component';
import { HeroSections5Component } from './example-components/HeroSections/hero-sections-5/hero-sections-5.component';
import { HeroSections6Component } from './example-components/HeroSections/hero-sections-6/hero-sections-6.component';
import { HeroSections7Component } from './example-components/HeroSections/hero-sections-7/hero-sections-7.component';
import { HeroSections8Component } from './example-components/HeroSections/hero-sections-8/hero-sections-8.component';
import { HeroSections9Component } from './example-components/HeroSections/hero-sections-9/hero-sections-9.component';
import { HeroSections10Component } from './example-components/HeroSections/hero-sections-10/hero-sections-10.component';
import { HeroSections11Component } from './example-components/HeroSections/hero-sections-11/hero-sections-11.component';
import { HeroSections12Component } from './example-components/HeroSections/hero-sections-12/hero-sections-12.component';
import { ProgressBarsBasicComponent } from './example-components/ProgressBars/progress-bars-basic/progress-bars-basic.component';
import { ProgressBarsAnimatedComponent } from './example-components/ProgressBars/progress-bars-animated/progress-bars-animated.component';
import { ProgressBarsLabelsComponent } from './example-components/ProgressBars/progress-bars-labels/progress-bars-labels.component';
import { ProgressBarsRoundedComponent } from './example-components/ProgressBars/progress-bars-rounded/progress-bars-rounded.component';
import { ProgressBarsColorsComponent } from './example-components/ProgressBars/progress-bars-colors/progress-bars-colors.component';
import { ProgressBarsMultipleComponent } from './example-components/ProgressBars/progress-bars-multiple/progress-bars-multiple.component';
import { ProgressBarsDynamicColorsComponent } from './example-components/ProgressBars/progress-bars-dynamic-colors/progress-bars-dynamic-colors.component';
import { ProgressBarsDynamicCirclesComponent } from './example-components/ProgressBars/progress-bars-dynamic-circles/progress-bars-dynamic-circles.component';
import { ProgressBarsDynamicCirclesVariationsComponent } from './example-components/ProgressBars/progress-bars-dynamic-circles-variations/progress-bars-dynamic-circles-variations.component';
import { ProgressBarsDynamicCirclesVariations2Component } from './example-components/ProgressBars/progress-bars-dynamic-circles-variations2/progress-bars-dynamic-circles-variations2.component';
import { RatingsBasicComponent } from './example-components/Ratings/ratings-basic/ratings-basic.component';
import { RatingsHorizontalComponent } from './example-components/Ratings/ratings-horizontal/ratings-horizontal.component';
import { RatingsHorizontalAlternateComponent } from './example-components/Ratings/ratings-horizontal-alternate/ratings-horizontal-alternate.component';
import { RatingsVerticalComponent } from './example-components/Ratings/ratings-vertical/ratings-vertical.component';
import { RatingsVerticalAlternateComponent } from './example-components/Ratings/ratings-vertical-alternate/ratings-vertical-alternate.component';
import { RatingsCustomIconsOneComponent } from './example-components/Ratings/ratings-custom-icons-one/ratings-custom-icons-one.component';
import { RatingsCustomIconsTwoComponent } from './example-components/Ratings/ratings-custom-icons-two/ratings-custom-icons-two.component';
import { RibbonsHorizontalComponent } from './example-components/Ribbons/ribbons-horizontal/ribbons-horizontal.component';
import { RibbonsVerticalComponent } from './example-components/Ribbons/ribbons-vertical/ribbons-vertical.component';
import { RibbonsAngleComponent } from './example-components/Ribbons/ribbons-angle/ribbons-angle.component';
import { ScrollableBasicComponent } from './example-components/Scrollable/scrollable-basic/scrollable-basic.component';
import { ScrollableInfiniteScrollComponent } from './example-components/Scrollable/scrollable-infinite-scroll/scrollable-infinite-scroll.component';
import { ScrollableIntegrationOneComponent } from './example-components/Scrollable/scrollable-integration-one/scrollable-integration-one.component';
import { ScrollableIntegrationTwoComponent } from './example-components/Scrollable/scrollable-integration-two/scrollable-integration-two.component';
import { ScrollableIntegrationThreeComponent } from './example-components/Scrollable/scrollable-integration-three/scrollable-integration-three.component';
import { ScrollableIntegrationFourComponent } from './example-components/Scrollable/scrollable-integration-four/scrollable-integration-four.component';
import { ScrollableIntegrationFiveComponent } from './example-components/Scrollable/scrollable-integration-five/scrollable-integration-five.component';
import { SearchBarsBasicComponent } from './example-components/SearchBars/search-bars-basic/search-bars-basic.component';
import { SearchBarsVariationOneComponent } from './example-components/SearchBars/search-bars-variation-one/search-bars-variation-one.component';
import { SearchBarsVariationTwoComponent } from './example-components/SearchBars/search-bars-variation-two/search-bars-variation-two.component';
import { SearchBarsVariationThreeComponent } from './example-components/SearchBars/search-bars-variation-three/search-bars-variation-three.component';
import { SparklinesChartsBasicComponent } from './example-components/SparklinesCharts/sparklines-charts-basic/sparklines-charts-basic.component';
import { SparklinesChartsApexComponent } from './example-components/SparklinesCharts/sparklines-charts-apex/sparklines-charts-apex.component';
import { SparklinesChartsGradientsComponent } from './example-components/SparklinesCharts/sparklines-charts-gradients/sparklines-charts-gradients.component';
import { TabsBasicComponent } from './example-components/Tabs/tabs-basic/tabs-basic.component';
import { TabsHeaderComponent } from './example-components/Tabs/tabs-header/tabs-header.component';
import { TabsColorsComponent } from './example-components/Tabs/tabs-colors/tabs-colors.component';
import { TabsAnimatedComponent } from './example-components/Tabs/tabs-animated/tabs-animated.component';
import { TabsAnimatedAlternateComponent } from './example-components/Tabs/tabs-animated-alternate/tabs-animated-alternate.component';
import { TimelinesBasicComponent } from './example-components/Timelines/timelines-basic/timelines-basic.component';
import { TimelinesBasicAlternateComponent } from './example-components/Timelines/timelines-basic-alternate/timelines-basic-alternate.component';
import { TimelinesIconsComponent } from './example-components/Timelines/timelines-icons/timelines-icons.component';
import { TimelinesColorsComponent } from './example-components/Timelines/timelines-colors/timelines-colors.component';
import { TimelinesHorizontalComponent } from './example-components/Timelines/timelines-horizontal/timelines-horizontal.component';
import { TimelinesHorizontalCenterComponent } from './example-components/Timelines/timelines-horizontal-center/timelines-horizontal-center.component';
import { TimelinesVerticalComponent } from './example-components/Timelines/timelines-vertical/timelines-vertical.component';
import { PopoversBasicComponent } from './example-components/Popovers/popovers-basic/popovers-basic.component';
import { PopoversColorsComponent } from './example-components/Popovers/popovers-colors/popovers-colors.component';
import { PopoversIntegrationsComponent } from './example-components/Popovers/popovers-integrations/popovers-integrations.component';
import { TooltipsBasicComponent } from './example-components/Tooltips/tooltips-basic/tooltips-basic.component';
import { TooltipsColorsComponent } from './example-components/Tooltips/tooltips-colors/tooltips-colors.component';
import { TooltipsIntegrationsComponent } from './example-components/Tooltips/tooltips-integrations/tooltips-integrations.component';
import { TreeViewBasicComponent } from './example-components/TreeView/tree-view-basic/tree-view-basic.component';
import { TreeViewCheckboxComponent } from './example-components/TreeView/tree-view-checkbox/tree-view-checkbox.component';
import { TreeViewDragDropComponent } from './example-components/TreeView/tree-view-drag-drop/tree-view-drag-drop.component';
import { TreeViewGridComponent } from './example-components/TreeView/tree-view-grid/tree-view-grid.component';
import { UtilitiesHelpersPrimaryColorsComponent } from './example-components/UtilitiesHelpers/utilities-helpers-primary-colors/utilities-helpers-primary-colors.component';
import { UtilitiesHelpersNeutralColorsComponent } from './example-components/UtilitiesHelpers/utilities-helpers-neutral-colors/utilities-helpers-neutral-colors.component';
import { UtilitiesHelpersGradientsComponent } from './example-components/UtilitiesHelpers/utilities-helpers-gradients/utilities-helpers-gradients.component';
import { UtilitiesHelpersBrandColorsComponent } from './example-components/UtilitiesHelpers/utilities-helpers-brand-colors/utilities-helpers-brand-colors.component';
import { UtilitiesHelpersComposedBackgroundsComponent } from './example-components/UtilitiesHelpers/utilities-helpers-composed-backgrounds/utilities-helpers-composed-backgrounds.component';

// Example pages

import { DashboardDefaultComponent } from './example-pages/dashboard-default/dashboard-default.component';
import { ApplicationsChatComponent } from './example-pages/applications-chat/applications-chat.component';
import { PagesLoginComponent } from './example-pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './example-pages/pages-register/pages-register.component';
import { PagesRecoverPasswordComponent } from './example-pages/pages-recover-password/pages-recover-password.component';
import { PagesError404Component } from './example-pages/pages-error-404/pages-error-404.component';
import { ButtonsComponent } from './example-pages/buttons/buttons.component';
import { UtilitiesHelpersComponent } from './example-pages/utilities-helpers/utilities-helpers.component';

import { AuthGuard } from './auth/auth-guard';
import { LoginGuard } from './auth/login-guard';
import { XhrInterceptor } from './auth/xhr';

@NgModule({
    declarations: [
        AppComponent,

        // Layout components

        HeaderComponent,
        HeaderDotsComponent,
        HeaderDrawerComponent,
        HeaderUserboxComponent,
        HeaderSearchComponent,
        HeaderMenuComponent,
        SidebarCollapsedComponent,
        SidebarComponent,
        SidebarHeaderComponent,
        SidebarUserboxComponent,
        SidebarMenuComponent,
        SidebarFooterComponent,
        PageTitleComponent,
        FooterComponent,
        ThemeConfiguratorComponent,
        PromoSectionComponent,
        ExampleWrapperSimpleComponent,
        ExampleWrapperSeamlessComponent,
        ExampleWrapperContainerComponent,

        // Layouts

        LeftSidebarComponent,
        CollapsedSidebarComponent,
        MinimalLayoutComponent,
        PresentationLayoutComponent,

        // Example components

        DashboardDefaultSection1Component,
        DashboardDefaultSection2Component,
        DashboardDefaultSection3Component,
        DashboardDefaultSection4Component,
        DashboardDefaultSection5Component,
        DashboardDefaultSection6Component,
        DashboardDefaultSection7Component,
        DashboardDefaultSection8Component,
        DashboardAnalyticsSection1Component,
        DashboardAnalyticsSection2Component,
        DashboardAnalyticsSection3Component,
        DashboardAnalyticsSection4Component,
        DashboardAnalyticsSection5Component,
        DashboardAnalyticsSection6Component,
        DashboardAnalyticsSection7Component,
        DashboardAnalyticsSection8Component,
        DashboardSalesSection1Component,
        DashboardSalesSection2Component,
        DashboardSalesSection3Component,
        DashboardSalesSection4Component,
        DashboardSalesSection5Component,
        DashboardSalesSection6Component,
        DashboardSalesSection7Component,
        DashboardSalesSection8Component,
        DashboardSalesSection9Component,
        DashboardReportsSection1Component,
        DashboardReportsSection2Component,
        DashboardReportsSection3Component,
        DashboardReportsSection4Component,
        DashboardReportsSection5Component,
        DashboardReportsSection6Component,
        DashboardReportsSection7Component,
        DashboardReportsSection8Component,
        DashboardRealEstateSection1Component,
        DashboardRealEstateSection2Component,
        DashboardRealEstateSection3Component,
        DashboardRealEstateSection4Component,
        DashboardRealEstateSection5Component,
        DashboardRealEstateSection6Component,
        DashboardRealEstateSection7Component,
        DashboardRealEstateSection8Component,
        DashboardServerStatusSection1Component,
        DashboardServerStatusSection2Component,
        DashboardServerStatusSection3Component,
        DashboardServerStatusSection4Component,
        DashboardServerStatusSection5Component,
        DashboardServerStatusSection6Component,
        DashboardServerStatusSection7Component,
        DashboardServerStatusSection8Component,
        DashboardServerStatusSection9Component,
        DashboardProjectsSection1Component,
        DashboardProjectsSection2Component,
        DashboardProjectsSection3Component,
        DashboardProjectsSection4Component,
        DashboardProjectsSection5Component,
        DashboardProjectsSection6Component,
        DashboardProjectsSection7Component,
        DashboardProjectsSection8Component,
        DashboardProjectsSection9Component,
        DashboardHelpdeskSection1Component,
        DashboardHelpdeskSection2Component,
        DashboardHelpdeskSection3Component,
        DashboardHelpdeskSection4Component,
        DashboardHelpdeskSection5Component,
        DashboardCustomersSection1Component,
        DashboardCustomersSection2Component,
        DashboardCustomersSection3Component,
        DashboardCustomersSection4Component,
        DashboardCustomersSection5Component,
        DashboardCustomersSection6Component,
        DashboardCustomersSection7Component,
        DashboardCryptocurrencySection1Component,
        DashboardCryptocurrencySection2Component,
        DashboardCryptocurrencySection3Component,
        DashboardCryptocurrencySection4Component,
        DashboardCryptocurrencySection5Component,
        DashboardCryptocurrencySection6Component,
        DashboardCryptocurrencySection7Component,
        DashboardCrmManagerSection1Component,
        DashboardCrmManagerSection2Component,
        DashboardCrmManagerSection3Component,
        DashboardCrmManagerSection4Component,
        DashboardCrmManagerSection5Component,
        DashboardCrmManagerSection6Component,
        DashboardCrmManagerSection7Component,
        DashboardCrmManagerSection8Component,
        DashboardContentSection1Component,
        DashboardContentSection2Component,
        DashboardContentSection3Component,
        DashboardContentSection4Component,
        DashboardContentSection5Component,
        DashboardContentSection6Component,
        DashboardContentSection7Component,
        ApplicationsCalendarContentComponent,
        ApplicationsChatContentComponent,
        ApplicationsContactsContentComponent,
        ApplicationsFileManagerContentComponent,
        ApplicationsMailContentComponent,
        ApplicationsProjectsContentComponent,
        ApplicationsWidgetsChatComponent,
        ApplicationsWidgetsFilesComponent,
        ApplicationsWidgetsTimelineComponent,
        PagesError404ContentComponent,
        PagesError500ContentComponent,
        PagesError505ContentComponent,
        PagesInvoiceContentComponent,
        PagesLoginContentComponent,
        PagesProfileContentComponent,
        PagesRecoverPasswordContentComponent,
        PagesRegisterContentComponent,
        AccordionsBasicComponent,
        AccordionsCollapseComponent,
        AccordionsIntegrationOneComponent,
        AccordionsIntegrationTwoComponent,
        ApexChartsLineComponent,
        ApexChartsAreaComponent,
        ApexChartsColumnComponent,
        ApexChartsBarComponent,
        ApexChartsMixedComponent,
        ApexChartsHeatmapComponent,
        ApexChartsRadialbarComponent,
        ApexChartsRadarComponent,
        AvatarsBasicComponent,
        AvatarsSizingComponent,
        AvatarsInitialsComponent,
        AvatarsBadgesComponent,
        AvatarsOverlapComponent,
        BadgesBasicComponent,
        BadgesPillsComponent,
        BadgesButtonsComponent,
        BadgesDotsComponent,
        BadgesDotsPositionsComponent,
        BadgesButtonDotsComponent,
        ButtonsBasicComponent,
        ButtonsGroupsComponent,
        ButtonsGroupsSizingComponent,
        ButtonsColorsComponent,
        ButtonsLinksComponent,
        ButtonsOutlineComponent,
        ButtonsSizingComponent,
        ButtonsPillsComponent,
        ButtonsSquareComponent,
        ButtonsGradientsComponent,
        ButtonsLoadingComponent,
        ButtonsSocialComponent,
        ButtonsIconsComponent,
        CalendarsInlineComponent,
        CalendarsFullWidthBasicComponent,
        Cards1Examples1Component,
        Cards1Examples2Component,
        Cards1Examples3Component,
        Cards1Examples4Component,
        Cards1Examples5Component,
        Cards1Examples6Component,
        Cards1Examples7Component,
        Cards2Examples8Component,
        Cards2Examples9Component,
        Cards2Examples10Component,
        Cards2Examples11Component,
        Cards2Examples12Component,
        Cards2Examples13Component,
        Cards2Examples14Component,
        Cards3Examples15Component,
        Cards3Examples16Component,
        Cards3Examples17Component,
        Cards3Examples18Component,
        Cards3Examples19Component,
        Cards3Examples20Component,
        Cards3Examples21Component,
        Cards4Examples22Component,
        Cards4Examples23Component,
        Cards4Examples24Component,
        Cards4Examples25Component,
        Cards4Examples26Component,
        Cards4Examples27Component,
        Cards4Examples28Component,
        Cards5Examples29Component,
        Cards5Examples30Component,
        Cards5Examples31Component,
        Cards5Examples32Component,
        Cards5Examples33Component,
        Cards5Examples35Component,
        Cards6Examples36Component,
        Cards6Examples37Component,
        Cards6Examples38Component,
        Cards6Examples39Component,
        Cards6Examples40Component,
        Cards6Examples41Component,
        Cards7Examples42Component,
        Cards7Examples43Component,
        Cards7Examples44Component,
        Cards7Examples45Component,
        Cards7Examples46Component,
        Cards7Examples47Component,
        Cards7Examples48Component,
        Cards8Examples49Component,
        Cards8Examples50Component,
        Cards8Examples51Component,
        Cards8Examples52Component,
        Cards8Examples53Component,
        Cards8Examples54Component,
        Cards8Examples55Component,
        Cards9Examples56Component,
        Cards9Examples57Component,
        Cards9Examples58Component,
        Cards9Examples59Component,
        Cards9Examples60Component,
        Cards9Examples61Component,
        Cards10Examples62Component,
        Cards10Examples63Component,
        Cards10Examples64Component,
        Cards10Examples65Component,
        Cards10Examples66Component,
        Cards10Examples67Component,
        Cards10Examples68Component,
        Cards11Examples69Component,
        Cards11Examples70Component,
        Cards11Examples71Component,
        Cards11Examples72Component,
        Cards11Examples73Component,
        Cards11Examples74Component,
        Cards12Examples75Component,
        Cards12Examples76Component,
        Cards12Examples77Component,
        Cards12Examples78Component,
        Cards12Examples79Component,
        CarouselsBasicComponent,
        CarouselsSlideshowsComponent,
        CarouselsFullWidthComponent,
        CarouselsIntegrationOneComponent,
        CarouselsIntegrationTwoComponent,
        CarouselsIntegrationThreeComponent,
        CarouselsIntegrationFourComponent,
        ChartjsChartsLineComponent,
        ChartjsChartsBarComponent,
        ChartjsChartsDoughnutComponent,
        ChartjsChartsRadarComponent,
        ChartjsChartsPolarComponent,
        ChartjsChartsDynamicComponent,
        ContextMenusBasicComponent,
        ContextMenusAlternateComponent,
        CountupBasicComponent,
        CountupNumbersComponent,
        CountupIntegrationOneComponent,
        CountupIntegrationTwoComponent,
        CountupIntegrationThreeComponent,
        DragDropBasicComponent,
        DragDropListsComponent,
        DropdownsBasicComponent,
        DropdownsSplitComponent,
        DropdownsIntegrationsComponent,
        RegularTables1Example1Component,
        RegularTables2Example2Component,
        RegularTables2Example3Component,
        RegularTables3Example4Component,
        RegularTables3Example5Component,
        RegularTables4Example6Component,
        RegularTables4Example7Component,
        RegularTables5Example8Component,
        DynamicTables1Example1Component,
        DynamicTables2Example1Component,
        FormsClipboardInputComponent,
        FormsClipboardTextareaComponent,
        FormsColorpickerBasicComponent,
        FormsColorpickerPermanentComponent,
        FormsControlsBasicComponent,
        FormsControlsInputGroupsComponent,
        FormsDatepickerBasicComponent,
        FormsDatepickerRangeComponent,
        FormsDualListboxBasicComponent,
        FormsInputMaskBasicComponent,
        FormsInputSelectNgSelectComponent,
        FormsInputSelectMultiselectDropdownComponent,
        FormsLayoutBasicComponent,
        FormsLayoutGridsComponent,
        FormsSliderBasicComponent,
        FormsSliderTooltipsComponent,
        FormsSliderDisabledComponent,
        FormsSliderPipsComponent,
        FormsSliderColorsComponent,
        FormsTextareaAutosizeBasicComponent,
        FormsTextareaAutosizeMinMaxRowsComponent,
        FormsTimepickerBasicComponent,
        FormsTimepickerCustomStepsComponent,
        FormsTimepickerToggleMinutesSecondsComponent,
        FormsTimepickerDynamicComponent,
        FormsTimepickerMouseWheelComponent,
        FormsToggleSwitchBasicComponent,
        FormsToggleSwitchColorsComponent,
        FormsToggleSwitchAlteranteComponent,
        FormsTypeaheadBasicComponent,
        FormsTypeaheadScrollableComponent,
        FormsTypeaheadGroupingComponent,
        FormsTypeaheadItemTemplateComponent,
        FormsUploadDropzoneComponent,
        FormsUploadMultiComponent,
        FormsValidationBasicComponent,
        FormsValidationFormlyComponent,
        FormsWizardHorizontalComponent,
        FormsWizardVerticalComponent,
        FormsWizardIntegrationOneComponent,
        FormsWizardIntegrationTwoComponent,
        FormsWysiwygEditorAngularEditorComponent,
        GaugesChartsBasicComponent,
        GaugesChartsCircleProgressComponent,
        GaugesChartsIntegrationOneComponent,
        GaugesChartsIntegrationTwoComponent,
        GuidedToursBasicComponent,
        IconsFlagsComponent,
        IconsFeatherComponent,
        IconsFontawesomeComponent,
        IconsIonComponent,
        IconsPe7Component,
        IconsSociconsComponent,
        ImageCropBasicComponent,
        ListGroupsBasicComponent,
        ListGroupsActionsComponent,
        ListGroupsVariations1Component,
        ListGroupsVariations2Component,
        ListGroupsVariations3Component,
        ListGroupsVariations4Component,
        ListGroupsVariations5Component,
        ListGroupsVariations6Component,
        ListGroupsVariations7Component,
        ListGroupsVariations8Component,
        LoadingIndicatorsBasicComponent,
        LoadingIndicatorsColorsComponent,
        LoadingIndicatorsBlockLoadingComponent,
        LoadingIndicatorsSkeletonLoadingComponent,
        MapsGoogleMapsComponent,
        MapsLeafletComponent,
        ModalsBasicComponent,
        ModalsBorderlessComponent,
        ModalsColorsComponent,
        ModalsConfirmationComponent,
        NavigationMenusHorizontalComponent,
        NavigationMenusVerticalBasicComponent,
        NavigationMenusVerticalColorsComponent,
        NavigationMenusVerticalAlternateComponent,
        NavigationMenusVerticalAlternateLargeComponent,
        NavigationMenusVerticalHeadersComponent,
        NavigationMenusGridComponent,
        NavigationMenusGridAlternateComponent,
        NavigationMenusGridCondensedComponent,
        NotificationsSweetalertsComponent,
        NotificationsToastrComponent,
        NotificationsToastsComponent,
        NotificationsAlertsBasicComponent,
        NotificationsAlertsDismissibleComponent,
        NotificationsAlertsAlternateStyleComponent,
        PaginationBasicComponent,
        PaginationSizingComponent,
        PaginationColorsComponent,
        PaginationDynamicComponent,
        FeatureSections1Component,
        FeatureSections2Component,
        FeatureSections3Component,
        FeatureSections4Component,
        FeatureSections5Component,
        FeatureSections6Component,
        FooterSections1Component,
        FooterSections2Component,
        FooterSections3Component,
        HeaderSections1Component,
        HeaderSections2Component,
        HeaderSections3Component,
        HeaderSections4Component,
        HeaderSections5Component,
        HeaderSections6Component,
        IconBoxes1Component,
        IconBoxes2Component,
        IconBoxes3Component,
        IconBoxes4Component,
        IconBoxes5Component,
        IconBoxes6Component,
        IconBoxes7Component,
        BlogSections1Component,
        BlogSections2Component,
        BlogSections3Component,
        BlogSections4Component,
        TestimonialsSections1Component,
        TestimonialsSections2Component,
        TestimonialsSections3Component,
        TestimonialsSections4Component,
        PartnersSections1Component,
        PartnersSections2Component,
        PartnersSections3Component,
        PartnersSections4Component,
        CtaBoxes1Component,
        CtaBoxes2Component,
        CtaBoxes3Component,
        CtaBoxes4Component,
        PricingTables1Component,
        PricingTables2Component,
        PricingTables3Component,
        PricingTables4Component,
        HeroSections1Component,
        HeroSections2Component,
        HeroSections3Component,
        HeroSections4Component,
        HeroSections5Component,
        HeroSections6Component,
        HeroSections7Component,
        HeroSections8Component,
        HeroSections9Component,
        HeroSections10Component,
        HeroSections11Component,
        HeroSections12Component,
        ProgressBarsBasicComponent,
        ProgressBarsAnimatedComponent,
        ProgressBarsLabelsComponent,
        ProgressBarsRoundedComponent,
        ProgressBarsColorsComponent,
        ProgressBarsMultipleComponent,
        ProgressBarsDynamicColorsComponent,
        ProgressBarsDynamicCirclesComponent,
        ProgressBarsDynamicCirclesVariationsComponent,
        ProgressBarsDynamicCirclesVariations2Component,
        RatingsBasicComponent,
        RatingsHorizontalComponent,
        RatingsHorizontalAlternateComponent,
        RatingsVerticalComponent,
        RatingsVerticalAlternateComponent,
        RatingsCustomIconsOneComponent,
        RatingsCustomIconsTwoComponent,
        RibbonsHorizontalComponent,
        RibbonsVerticalComponent,
        RibbonsAngleComponent,
        ScrollableBasicComponent,
        ScrollableInfiniteScrollComponent,
        ScrollableIntegrationOneComponent,
        ScrollableIntegrationTwoComponent,
        ScrollableIntegrationThreeComponent,
        ScrollableIntegrationFourComponent,
        ScrollableIntegrationFiveComponent,
        SearchBarsBasicComponent,
        SearchBarsVariationOneComponent,
        SearchBarsVariationTwoComponent,
        SearchBarsVariationThreeComponent,
        SparklinesChartsBasicComponent,
        SparklinesChartsApexComponent,
        SparklinesChartsGradientsComponent,
        TabsBasicComponent,
        TabsHeaderComponent,
        TabsColorsComponent,
        TabsAnimatedComponent,
        TabsAnimatedAlternateComponent,
        TimelinesBasicComponent,
        TimelinesBasicAlternateComponent,
        TimelinesIconsComponent,
        TimelinesColorsComponent,
        TimelinesHorizontalComponent,
        TimelinesHorizontalCenterComponent,
        TimelinesVerticalComponent,
        PopoversBasicComponent,
        PopoversColorsComponent,
        PopoversIntegrationsComponent,
        TooltipsBasicComponent,
        TooltipsColorsComponent,
        TooltipsIntegrationsComponent,
        TreeViewBasicComponent,
        TreeViewCheckboxComponent,
        TreeViewDragDropComponent,
        TreeViewGridComponent,
        UtilitiesHelpersPrimaryColorsComponent,
        UtilitiesHelpersNeutralColorsComponent,
        UtilitiesHelpersGradientsComponent,
        UtilitiesHelpersBrandColorsComponent,
        UtilitiesHelpersComposedBackgroundsComponent,

        // Example pages

        DashboardDefaultComponent,
        ApplicationsChatComponent,
        PagesLoginComponent,
        PagesRegisterComponent,
        PagesRecoverPasswordComponent,
        PagesError404Component,
        ButtonsComponent,
        UtilitiesHelpersComponent,

    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,

        ButtonsModule.forRoot(),
        CollapseModule.forRoot(),
        TimepickerModule.forRoot(),
        TypeaheadModule.forRoot(),
        CarouselModule.forRoot(),
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        ProgressbarModule.forRoot(),
        TabsModule.forRoot(),
        PopoverModule.forRoot(),
        TooltipModule.forRoot(),
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        NgApexchartsModule,
        PerfectScrollbarModule,
        UiSwitchModule,
        FileUploadModule,
        DropzoneModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
        ArchwizardModule,
        AngularEditorModule,
        NgCircleProgressModule.forRoot(),
        GaugeModule.forRoot(),
        NgxGaugeModule,
        LaddaModule,
        CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
        SlickCarouselModule,
        ChartsModule,
        ContextMenuModule.forRoot(),
        CountUpModule,
        DragulaModule.forRoot(),
        Ng2TableModule,
        Ng2SmartTableModule,
        Ng2CompleterModule,
        ColorPickerModule,
        ClipboardModule,
        NgSelectModule,
        AutosizeModule,
        NouisliderModule,
        NgxFlagIconCssModule,
        FeatherModule.pick(icons),
        FontAwesomeModule,
        NgSpinKitModule,
        NgxSkeletonLoaderModule,
        NgProgressModule,
        NgProgressRouterModule,
        NgxSpinnerModule,
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyCoVRykl39EigHTQ0wnI0ISVGR3zpV4dDM' }),
        SweetAlert2Module.forRoot(),
        NotifierModule.withConfig(customNotifierOptions),
        NgxPaginationModule,
        BarRatingModule,
        InfiniteScrollModule,
        TrendModule,
        TreeModule.forRoot(),
        AngularTreeGridModule,
        JoyrideModule.forRoot(),
        ImageCropperModule,
        AngularDualListBoxModule,
        TextMaskModule,
        LeafletModule.forRoot(),
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        {
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: XhrInterceptor,
            multi: true
        },
        ThemeOptions,
        AuthGuard,
        LoginGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faFacebook, faPrint, faAlignCenter, faMapMarkerAlt, faTachometerAlt, faExternalLinkAlt, faShareSquare, faSitemap, faInfoCircle, faLifeRing, faTwitter, faQuoteRight, faStarHalfAlt, faSync, faShapes, faCarBattery, faTable, faCubes, faPager, faAngular, faVuejs, faReact, faHtml5, faCheckCircle, faTimesCircle, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faThumbsUp, faCameraRetro, faUnlockAlt, faDownload, faUpload, faReply, faGoogle, faFileImage, faFolderOpen, faBars, faTrashAlt, faSave, faPlayCircle, faEllipsisV, faEllipsisH, faSlidersH, faFileArchive, faAward, faCaretRight, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub, faPlus, faFolder, faTimes, faEnvelope, faAddressCard, faMap, faCalendarAlt, faImages, faFilm, faClock, faSearch, faChevronRight, faChevronUp, faChevronLeft, faChevronDown, faLink, faLightbulb, faGem, faCog, faDotCircle, faArrowsAltH, faComments, faCommentDots, faKeyboard, faObjectGroup, faUser, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLemon);
    }
}
