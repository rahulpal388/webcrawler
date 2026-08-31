import { LocationType } from "@repo/db/types/logActivitySchema.Types";
import maxmind, { CityResponse } from "maxmind";



class GeoIpService {
    private cityLookup: maxmind.Reader<CityResponse> | null = null;


    async initialize() {
        this.cityLookup = await maxmind.open<CityResponse>(
            "../api/src/data/geoip/GeoLite2-City.mmdb"
        );
    }

    async lookup(ipAddress: string): Promise<LocationType | null> {
        if (!this.cityLookup) {
            throw new Error("GeoIP service not initialized");
        }

        const cityResponse = this.cityLookup.get(ipAddress);

        if (!cityResponse) {
            return null;
        }

        const location: LocationType = {
            country: cityResponse.country?.names?.en || "Unknown",
            region: cityResponse.subdivisions?.[0]?.names?.en || null,
            city: cityResponse.city?.names?.en || null,
        };

        if (location.country === "Unknown" && location.region === null && location.city === null) {
            return null;
        }

        return location;
    }
}


const geoIpService = new GeoIpService();

export default geoIpService;