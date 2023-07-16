export enum InitialStatus {
    notSent,
    sucessSendAndProcess,
    errorSendOrProcess,
    lateNoticiation,
}

export class MainNotification {
    private notificationID!:string;
    private initialStatus!:InitialStatus;
    private countdownTimer!:any;

}