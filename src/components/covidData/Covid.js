import axios from 'axios';
import { useEffect, useState } from 'react';
import './covid.css';
import moment from 'moment';

const Covid = () => {
    const [dataCovid, setdataCovid] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2022-03-01T00:00:00Z&to=2022-03-21T00:00:00Z')

                let Data = res && res.data ? res.data : [];
                Data = Data.reverse();
                if (Data && Data.length > 0) {
                    Data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        item.Active = String(item.Active).replace(/(.)(?=(\d{3})+$)/g, '$1,');
                        item.Deaths = String(item.Deaths).replace(/(.)(?=(\d{3})+$)/g, '$1,');
                        item.Confirmed = String(item.Confirmed).replace(/(.)(?=(\d{3})+$)/g, '$1,');
                        return item;
                    })
                }
                setdataCovid(Data);
                setLoading(false);
                console.log('check run side effect>>>')
            } catch (e) {
                setErr(true);
                setLoading(true);
            }

        }

        const timeOut = setTimeout(() => {
            fetchData();
        }, 2000)


        return () => {
            clearTimeout(timeOut);
            console.log('check run cleanup>>>');
        }



    }, [])//just run onece time after redering
    console.log(dataCovid);
    return (
        <>
            <div>COVID-19 TRACKING IN VIET NAM:</div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Actived</th>

                    </tr>
                </thead>
                <tbody>
                    {!err && !loading && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                    <td>{item.Active}</td>

                                </tr>

                            )
                        })
                    }
                    {!err && loading &&
                        <tr >
                            <td style={{ textAlign: 'center' }} colSpan='5' >Loading Data...</td>
                        </tr>


                    }
                    {err && loading &&
                        <tr >
                            <td style={{ textAlign: 'center' }} colSpan='5' >something wrong</td>
                        </tr>
                    }




                </tbody>
            </table>

        </>

    );
}
export default Covid;