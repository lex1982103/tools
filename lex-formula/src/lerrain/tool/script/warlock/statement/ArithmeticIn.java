package lerrain.tool.script.warlock.statement;

import lerrain.tool.formula.Factors;
import lerrain.tool.script.warlock.analyse.Words;

import java.util.List;
import java.util.Map;

public class ArithmeticIn extends Arithmetic2Elements
{
    public ArithmeticIn(Words ws, int i)
    {
        super(ws, i);
    }

    private boolean same(Object lo, Object ro)
    {
        if (lo == ro)
            return true;
        if (lo == null)
            return ro == null;

        if (lo instanceof Number)
        {
            if (ro instanceof Number)
                return ((Number) lo).doubleValue() == ((Number) ro).doubleValue();
            else
                return false;
        }

        return lo.equals(ro);
    }

    public Object run(Factors factors)
    {
        Object lo = this.l.run(factors);
        Object ro = this.r.run(factors);

        if (ro instanceof Object[])
        {
            for (Object v : (Object[])ro)
                if (same(lo, v))
                    return true;
        }
        else if (ro instanceof List)
        {
            for (Object v : (List)ro)
                if (same(lo, v))
                    return true;
        }
        else if (ro instanceof Map)
        {
            if (!(lo instanceof Number))
                return ((Map)ro).containsKey(lo);

            for (Object v : ((Map<?, ?>) ro).keySet())
                if (same(lo, v))
                    return true;
        }

        if (!(lo instanceof Number))
            return false;

        if (ro instanceof int[])
        {
            int p = ((Number)lo).intValue();
            for (int v : (int[])ro)
                if (v == p)
                    return true;
        }
        else if (ro instanceof long[])
        {
            long p = ((Number)lo).longValue();
            for (long v : (long[])ro)
                if (v == p)
                    return true;
        }
        else if (ro instanceof double[])
        {
            double p = ((Number)lo).doubleValue();
            for (double v : (double[])ro)
                if (v == p)
                    return true;
        }
        else if (ro instanceof float[])
        {
            float p = ((Number)lo).floatValue();
            for (float v : (float[])ro)
                if (v == p)
                    return true;
        }
        else if (ro instanceof short[])
        {
            short p = ((Number)lo).shortValue();
            for (short v : (short[])ro)
                if (v == p)
                    return true;
        }
        else if (ro instanceof byte[])
        {
            byte p = ((Number)lo).byteValue();
            for (byte v : (byte[])ro)
                if (v == p)
                    return true;
        }

        return false;
    }
}
