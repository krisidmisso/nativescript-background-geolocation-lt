/// <reference path="node_modules/tns-platform-declarations/tns-core-modules/ios.d.ts" />
import { AbstractBackgroundGeolocation } from './background-geolocation.common';
export declare class BackgroundGeolocation extends AbstractBackgroundGeolocation {
    constructor();
    configure(config: any, success: any, failure: any): void;
    setConfig(config: Object, success: any, failure: any): void;
    getState(success: Function): void;
    on(event: any, success: Function, failure?: (param: any) => void): void;
    changePace(value: boolean, success: any, failure: any): void;
    start(success: any, failure: any): void;
    stop(success: any, failure: any): void;
    startSchedule(success: any, failure: any): void;
    stopSchedule(success: any, failure: any): void;
    sync(success: FunctionConstructor, failure: any): void;
    getLocations(success: Function, failure: any): void;
    getCount(success: Function): void;
    clearDatabase(success: any, failure: any): void;
    insertLocation(data: any, success: any, failure: any): any;
    addGeofence(params: any, success: any, failure: any): void;
    addGeofences(geofences: any, success: any, failure: any): void;
    removeGeofence(identifier: any, success: any, failure: any): void;
    getGeofences(success: any, failure: any): void;
    removeGeofences(success: any, failure: any): void;
    getCurrentPosition(success: Function, failure: any, options: any): void;
    watchPosition(success: Function, failure: any, options: any): void;
    stopWatchPosition(): void;
    getOdometer(success: FunctionConstructor, failure: any): void;
    resetOdometer(success: any): void;
    playSound(soundId: number): void;
    getLog(success: Function): void;
    emailLog(email: string): void;
    private onLocation(location, type, isMoving);
    private onMotionChange(location, isMoving);
    private onGeofence(region, location, action);
    private onHttp(statusCode, requestData, responseData, error);
    private onError(type, error);
    private onHeartbeat(shakeCount, motionType, location);
    private onSyncComplete(locations);
    private onActivityChange(activityName);
    private onProviderChange(status);
    private onSchedule(schedule);
    private getJsObjectFromNSDictionary(dictionary);
    private getJsArrayFromNSArray(array);
    private getJsObject(object);
}
