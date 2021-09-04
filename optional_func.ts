function log(message: string, userId?: string): void {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}

log('Page loaded');
log('User signed in', 'easywaldo');


type Context = {
    appId?: string
    userId?: string
}

function appLog(message: string, context: Context={}): void {
    let time = new Date().toISOString();
    console.log(time, message, context.userId);
}

appLog('app initialized');
appLog('app launched', {appId: "superb", userId: "easywaldo"});