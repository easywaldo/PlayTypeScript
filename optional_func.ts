function log(message: string, userId?: string): void {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}

log('Page loaded');
log('User signed in', 'easywaldo');