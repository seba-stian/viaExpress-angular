import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'truncateMobile',
    standalone: true 
})
export class TruncateMobilePipe implements PipeTransform {
    transform(value: string, isMobile: boolean, limit: number = 35): string {
        if (!value) return '';
        return isMobile && value.length > limit ? value.slice(0, limit) + '...' : value;
    }
}

@Pipe({
    name: 'truncateWeb',
    standalone: true
})
export class TruncateWebPipe implements PipeTransform {
    transform(value: string, isMobile: boolean, limitWeb: number = 45): string {
        if (!value) return '';
        return !isMobile && value.length > limitWeb ? value.slice(0, limitWeb) + '...' : value;
    }
}