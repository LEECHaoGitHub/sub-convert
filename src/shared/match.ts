export class Match {
    #HK_RULE = '港|HK|hk|Hong Kong|HongKong|hongkong|HKG';

    #TW_RULE = '台|新北|彰化|TW|Taiwan|TPE|KHH';

    #KR_RULE = 'KR|Korea|KOR|Seoul|首尔|春川|韩|韓|ICN';

    #MO_RULE = '澳|MAC|mac|Macao|Macao|macau|MACAU';

    public getMatch(vpsHash?: string): string | null {
        if (!vpsHash) {
            return null;
        }
        const _vpsHash = decodeURIComponent(vpsHash);
        if (new RegExp(this.#HK_RULE).test(_vpsHash)) {
            return 'HK';
        }
        if (new RegExp(this.#TW_RULE).test(_vpsHash)) {
            return 'TW';
        }
        if (new RegExp(this.#KR_RULE).test(_vpsHash)) {
            return 'KR';
        }
        if (new RegExp(this.#MO_RULE).test(_vpsHash)) {
            return 'MO';
        }
        return null;
    }
}

