import useQueryParams from '../../lib/useQueryParams';

export default function Termsandcondtions() {
    const queryParams = useQueryParams();

    const id = queryParams.get('caseId');

    console.log(`Current ID: ${id}`); // Log the current ID to the console

    return (
        <div>Termsandcondtions</div>
    )
}
